function arrayToCSS(array) {
  return `${array.join(";")};`;
}

function returnDefault(property, defaultValue) {
  return typeof property === "string" ? property : defaultValue;
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

export function propertyGenerator(keys) {
  return props => {
    const properties = [];
    for (const key of keys) {
      if (typeof key[0] === "function") {
        properties.push(key[0](props));
        continue;
      }

      // Exits
      if (!props[key[0]] && !props[key]) continue;

      if (!Array.isArray(key)) {
        props[key] && properties.push(`${camelToKebab(key)}: ${props[key]}`);
        continue;
      }

      const isFunction = typeof key[1] === "function";
      const isObject = typeof key[1] === "object";

      if (!(isFunction || isObject)) {
        console.error(`Invalid options provided at key: ${key[0]}`);
        continue;
      }

      // All validated
      if (isFunction) properties.push(key[1](props));

      if (isObject) {
        const options = key[1];
        const property = options.property || camelToKebab(key[0]);
        if (options.default)
          props[key[0]] = returnDefault(props[key[0]], options.default);

        if (typeof options.handler === "function")
          properties.push(options.handler(props));
        else properties.push(`${property}: ${props[key[0]]}`);
      }
    }
    return arrayToCSS(properties);
  };
}
