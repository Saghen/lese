import styled, { css } from "styled-components";

export function arrayToCSS(array) {
  return `${array.join(";")};`;
}

export function getFlexProperties({
  column,
  xAlign,
  yAlign,
  wrap,
  separation
}) {
  const properties = [];
  properties.push("display: flex");

  // Set defaults
  xAlign = xAlign && returnDefault(xAlign, "string", "center");
  yAlign = yAlign && returnDefault(yAlign, "string", "center");
  wrap = wrap && returnDefault(wrap, "string", "wrap");

  if (wrap) properties.push(`flex-wrap: ${wrap}`);

  if (column) properties.push("flex-direction: column");

  if (xAlign)
    properties.push(
      column ? `align-items: ${xAlign}` : `justify-content: ${xAlign}`
    );
  if (yAlign)
    properties.push(
      !column ? `align-items: ${xAlign}` : `justify-content: ${xAlign}`
    );

  if (separation)
    properties.push(
      `
        > * {
          margin: 0;
        }
        > * + * {
          ${column ? `margin-top: ${separation}` : `margin-left: ${separation}`}
        }
      `
    );

  arrayToCSS(properties);
}

export function getTextProperties({
  color,
  fontSize,
  fontDecoration,
  fontWeight
}) {
  const properties = [];
  if (fontSize) properties.push(`font-size: ${fontSize}`);
  if (fontDecoration) properties.push(`font-decoration: ${fontDecoration}`);
  if (fontWeight) properties.push(`font-weight: ${fontWeight}`);

  return arrayToCSS(properties);
}

export function getSizeProperties({
  height,
  width,
  responsive,
  padding,
  margin
}) {
  const properties = [];
  if (width) {
    if (responsive) properties.push(`max-width: ${width}`, `width: 100%`);
    else properties.push(`width: ${width}`);
  }
  if (height) {
    if (responsive) properties.push(`max-height: ${height}`, `height: 100%`);
    else properties.push(`height: ${height}`);
  }
  return arrayToCSS(properties);
}

function returnDefault(property, type, defaultValue) {
  return typeof property === type ? property : defaultValue;
}

export function getLayoutProperties({ padding, margin, position }) {
  const properties = [];
  if (padding) properties.push(`padding: ${padding}`);
  if (margin) properties.push(`margin: ${margin}`);

  position = returnDefault(position, "string", "relative");
  if (position) properties.push(`position: ${position}`);
  return arrayToCSS(properties);
}

// TODO: Rename this function to something other than "Colouring"
export function getColouringProperties({
  background,
  backgroundColor,
  backgroundImage,
  color
}) {
  const properties = [];
  if (color) properties.push(`color: ${color}`);
  if (background) properties.push(`background: ${background}`);
  if (backgroundColor) properties.push(`background-color: ${backgroundColor}`);
  if (backgroundImage) properties.push(`background-image: ${backgroundImage}`);

  return arrayToCSS(properties);
}
