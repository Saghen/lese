import styled, { css } from "styled-components";

export function arrayToCSS(array) {
  return `${array.join(";")};`;
}

export function returnDefault(property, type, defaultValue) {
  return typeof property === type ? property : defaultValue;
}

export function getTextProperties({
  color,
  fontSize,
  fontDecoration,
  fontWeight
}) {
  const properties = [];
  if (color) properties.push(`color: ${color}`);
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

  if (padding) properties.push(`padding: ${padding}`);
  if (margin) properties.push(`margin: ${margin}`);
  return arrayToCSS(properties);
}

export function getLayoutProperties({ relative, block, inlineBlock }) {
  const properties = [];

  if (block) properties.push(`display: block`);
  if (inlineBlock) properties.push(`display: inline-block`);

  if (relative) properties.push(`position: relative`);

  return arrayToCSS(properties);
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
      !column ? `align-items: ${yAlign}` : `justify-content: ${yAlign}`
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

  return arrayToCSS(properties);
}

// TODO: Rename this function to something other than "Colouring" <- Cosmetic
export function getCosmeticProperties({ border, background, borderRadius }) {
  const properties = [];
  if (border) properties.push(`border: ${border}`);
  if (borderRadius) properties.push(`border-radius: ${borderRadius}`);
  if (background) properties.push(`background: ${background}`);

  return arrayToCSS(properties);
}

export function getGridProperties({
  columns,
  rows,
  autoColumns,
  autoRows,
  columnGap,
  rowGap,
  gap,
  xAlign,
  yAlign,
  align,
  xAlignSelf,
  yAlignSelf,
  alignSelf
}) {
  const properties = [];
  properties.push("display: grid");
  // TODO: Support for arrays?
  if (columns) properties.push(`grid-template-columns: ${columns}`);
  if (rows) properties.push(`grid-template-rows: ${rows}`);
  if (autoColumns) properties.push(`grid-auto-columns: ${autoColumns}`);
  if (autoRows) properties.push(`grid-auto-rows: ${autoRows}`);

  if (columnGap) properties.push(`grid-column-gap: ${columnGap}`);
  if (rowGap) properties.push(`grid-row-gap: ${rowGap}`);
  if (gap) properties.push(`grid-gap: ${gap}`);

  if (xAlign) properties.push(`justify-items: ${xAlign}`);
  if (yAlign) properties.push(`align-items: ${yAlign}`);
  if (align) properties.push(`place-items: ${align}`);

  if (xAlignSelf) properties.push(`justify-content: ${xAlignSelf}`);
  if (yAlignSelf) properties.push(`align-content: ${yAlignSelf}`);
  if (alignSelf) properties.push(`place-content: ${alignSelf}`);

  return arrayToCSS(properties);
}
