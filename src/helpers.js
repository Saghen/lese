import styled, { css } from "styled-components";

export function arrayToCSS(array) {
  return `${array.join(";")};`;
}

export function returnDefault(property, defaultValue) {
  return typeof property === "string" ? property : defaultValue;
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function propertyGenerator(keys) {
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
    console.log(properties);
    return arrayToCSS(properties);
  };
}

export const getTextProperties = propertyGenerator([
  "color",
  "fontSize",
  "fontDecoration",
  "fontWeight"
]);

export const getSizeProperties = propertyGenerator([
  [
    "height",
    ({ responsive, height }) =>
      responsive ? `max-height: ${height}; height: 100%` : `height: ${height}`
  ],
  [
    "width",
    ({ responsive, width }) =>
      responsive ? `max-width: ${width}; width: 100%` : `width: ${width}`
  ],
  "padding",
  "margin"
]);

export const getLayoutProperties = propertyGenerator([
  ["block", () => "display: block"],
  ["inlineBlock", () => "display: inline-block"],
  ["relative", () => "position: relative"]
]);

export const getCosmeticProperties = propertyGenerator([
  "border",
  "borderRadius",
  "background"
]);

export const getFlexProperties = propertyGenerator([
  ["column", () => "flex-direction: column"],
  [
    "xAlign",
    {
      default: "center",
      handler: ({ column, xAlign }) =>
        column ? `align-items: ${xAlign}` : `justify-content: ${xAlign}`
    }
  ],
  [
    "yAlign",
    {
      default: "center",
      handler: ({ column, yAlign }) =>
        !column ? `align-items: ${yAlign}` : `justify-content: ${yAlign}`
    }
  ],
  [
    "separation",
    ({ column, separation }) => `
    > * {
       margin: 0;
    }
    > * + * {
      ${column ? `margin-top: ${separation}` : `margin-left: ${separation}`}
    }`
  ],
  ["wrap", { default: "wrap", property: "flex-wrap" }]
]);

export const getGridProperties = propertyGenerator([
  ["columns", { property: "grid-template-columns" }],
  ["rows", { property: "grid-template-rows" }],
  ["autoColumns", { property: "grid-auto-column" }],
  ["autoRows", { property: "grid-auto-rows" }],
  ["columnGap", { property: "grid-column-gap" }],
  ["rowGap", { property: "grid-row-gap" }],
  ["gap", { property: "grid-gap" }],
  ["xAlign", { property: "justify-items", default: "center" }],
  ["yAlign", { property: "align-items", default: "center" }],
  ["align", { property: "place-items", default: "center center" }],
  ["xAlignSelf", { property: "justify-content", default: "center" }],
  ["yAlignSelf", { property: "align-content", default: "center" }],
  ["alignSelf", { property: "place-content", default: "center center" }]
]);
