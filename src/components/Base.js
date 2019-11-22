import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { propertyGenerator } from "../helpers";

const getTextProperties = propertyGenerator([
  "color",
  "fontSize",
  ["textAlign", { default: "center", property: "text-align" }]
]);

const getSizeProperties = propertyGenerator([
  [
    "height",
    ({ responsive, height }) =>
      responsive ? `max-height: ${height}; height: 100%` : `height: ${height}`
  ],
  [
    "width",
    ({ responsive, width }) =>
      responsive ? `max-width: ${width}; width: 100%` : `width: ${width}`
  ]
]);

const getLayoutProperties = propertyGenerator([
  ["relative", () => "position: relative"],
  ["margin", ({ margin }) => `margin: ${margin}`],
  ["padding", ({ padding }) => `padding: ${padding}`]
]);

export default styled("div", {
  shouldForwardProp: prop =>
    isPropValid(prop) && ['width', 'height', 'children'].indexOf(prop) !== -1
})`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
`;
