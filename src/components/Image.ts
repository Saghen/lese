import styled from "@emotion/styled";
import { propertyGenerator } from "../helpers";

export interface ImageProps {
  responsive?: boolean;
  center?: boolean;
  cover?: boolean;
}

// TODO: Implement width and height
const imageProperties = propertyGenerator<ImageProps>([
  ["responsive", () => "max-width: 100%;"],
  ["center", () => "object-position: center;"],
  ["cover", () => "object-fit: cover"]
]);

export default styled.img<ImageProps>`
  ${imageProperties}
`;
