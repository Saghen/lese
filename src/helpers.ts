function arrayToCSS(array: string[]) {
  return `${array.join(";")};`;
}

function returnDefault(property: any, defaultValue: any) {
  return typeof property === "string" ? property : defaultValue;
}

function camelToKebab(string: string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

export type PropertyGeneratorHandler<T> = (props: T) => string;

export interface PropertyGeneratorOptions<T> {
  default?: string;
  handler?: PropertyGeneratorHandler<T>;
  property?: string;
}

export type PropertyGeneratorKey<T> = Array<[Extract<keyof T, string>, PropertyGeneratorOptions<T> | PropertyGeneratorHandler<T>] | Extract<keyof T, string>>;

export function propertyGenerator<T>(keys: PropertyGeneratorKey<T>): (props: T) => string {
  return (props: T) => {
    const properties = [];
    for (const key of keys) {
      // Exits
      if (Array.isArray(key) && !props[key[0]]) continue;
      if (typeof key === "string" && !props[key]) continue;

      if (!Array.isArray(key)) {
        props[key] && properties.push(`${camelToKebab(key)}: ${props[key]}`);
        continue;
      }

      const isFunction = typeof key[1] === "function";
      const isObject = typeof key[1] === "object";

      if (!(isFunction || isObject))
        throw new TypeError(`Invalid options provided at key: ${key[0]}`);

      // All validated
      if (isFunction) properties.push((key[1] as PropertyGeneratorHandler<T>)(props));

      if (isObject) {
        const options = key[1] as PropertyGeneratorOptions<T>;
        const property = options.property || camelToKebab(key[0]);
        if (options.default) props[key[0]] = returnDefault(props[key[0]], options.default);

        if (typeof options.handler === "function") properties.push(options.handler(props));
        else properties.push(`${property}: ${props[key[0]]}`);
      }
    }
    return arrayToCSS(properties);
  };
}
