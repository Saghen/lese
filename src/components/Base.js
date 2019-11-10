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
  ["relative", () => "position: relative"]
]);

export default styled.div`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
`;
