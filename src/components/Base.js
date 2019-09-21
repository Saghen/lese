import styled from "@emotion/styled";
import { propertyGenerator } from "../helpers";

const getTextProperties = propertyGenerator([
  "color",
  "fontSize",
  "fontDecoration",
  "fontWeight",
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
  ],
  "padding",
  "margin"
]);

const getLayoutProperties = propertyGenerator([
  ["block", () => "display: block"],
  ["inlineBlock", () => "display: inline-block"],
  ["relative", () => "position: relative"]
]);

const getCosmeticProperties = propertyGenerator([
  "border",
  "borderRadius",
  "background"
]);

export default styled.div`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
  ${getCosmeticProperties}
`;
