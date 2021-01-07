import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";
import { propertyGenerator } from "../helpers";

export interface BaseProps {
  color?: string;
  fontSize?: string;
  textAlign?: boolean | string;
  height?: string;
  width?: string;
  relative?: boolean;
  margin?: string;
  padding?: string;
  responsive?: boolean;
}

const getTextProperties = propertyGenerator<BaseProps>([
  "color",
  "fontSize",
  ["textAlign", { default: "center", property: "text-align" }],
]);

const getSizeProperties = propertyGenerator<BaseProps>([
  [
    "height",
    ({ responsive, height }) =>
      responsive ? `max-height: ${height}; height: 100%` : `height: ${height}`,
  ],
  [
    "width",
    ({ responsive, width }) =>
      responsive ? `max-width: ${width}; width: 100%` : `width: ${width}`,
  ],
]);

const getLayoutProperties = propertyGenerator<BaseProps>([
  ["relative", () => "position: relative"],
  "margin",
  "padding",
]);

export default styled("div", {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && ["width", "height", "fontSize", "color", "wrap"].indexOf(prop) === -1,
})<BaseProps>`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
`;
