import styled from "@emotion/styled";
import Base from "./Base";

import { propertyGenerator } from "../helpers";

const getFlexProperties = propertyGenerator([
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
    > * + * {
      ${column ? `margin-top: ${separation}` : `margin-left: ${separation}`}
    }
    `
  ],
  [
    ({ noMarginReset }) =>
      !noMarginReset &&
      `> * {
       margin: 0;
      }`
  ],
  ["wrap", { default: "wrap", property: "flex-wrap" }]
]);

export default styled(Base)`
  display: flex;
  ${getFlexProperties}
`;
