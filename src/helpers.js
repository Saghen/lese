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
      if (Array.isArray(key)) {
        if (!props[key[0]]) continue;

        if (typeof key[1] === "function") properties.push(key[1](props));
        else if (typeof key[1] === "object") {
          const options = key[1];
          const property = options.property || camelToKebab(key[0]);
          if (options.default)
            props[key[0]] = returnDefault(props[key[0]], options.default);

          if (typeof options.handler === "function")
            properties.push(options.handler(props));
          else properties.push(`${property}: ${props[key[0]]}`);
        } else console.error(`Invalid options provided at key: ${key[0]}`);
        continue;
      }

      props[key] && properties.push(`${camelToKebab(key)}: ${props[key]};`);
    }
    return arrayToCSS(properties);
  };
}
