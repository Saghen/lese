import styled from "@emotion/styled";
import { propertyGenerator } from "../helpers";

// TODO: Implement width and height
const imageProperties = propertyGenerator([
  ["responsive", () => "max-width: 100%;"],
  ["center", () => "object-position: center;"],
  ["cover", () => "object-fit: cover"]
]);

export default styled.img`
  ${imageProperties}
`;
