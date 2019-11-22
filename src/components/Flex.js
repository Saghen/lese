import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Base from "./Base";

import { propertyGenerator } from "../helpers";
import { CLIENT_RENEG_LIMIT } from "tls";

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
        column ? `justify-content: ${yAlign}` : `align-items: ${yAlign}`
    }
  ],
  [
    ({ noMarginReset }) =>
      !noMarginReset &&
      `> * {
       margin: 0;
      }`
  ],
  [
    "separation",
    ({ column, separation }) => `
    > * + * {
      ${column ? `margin-top: ${separation}` : `margin-left: ${separation}`}
    }
    `
  ],

  ["wrap", { default: "wrap", property: "flex-wrap" }]
]);

const getChildFlexProperties = propertyGenerator([
  [
    "xAlignSelf",
    {
      default: "center",
      handler: ({ column, xAlignSelf }) =>
        column ? `align-self: ${xAlignSelf}` : `justify-self: ${xAlignSelf}`
    }
  ],
  [
    "yAlignSelf",
    {
      default: "center",
      handler: ({ column, yAlignSelf }) =>
        column ? `justify-self: ${yAlignSelf}` : `align-self: ${yAlignSelf}`
    }
  ]
]);

export default styled(Base)`
  display: flex;
  ${getFlexProperties}
  ${({ children, column }) => {
    if (!Array.isArray(children)) return;
    const properties = [];
    for (const [i, { props }] of children.entries())
      if (props.xAlignSelf || props.yAlignSelf)
        properties.push(`
        > *:nth-child(${i + 1}) {
          ${getChildFlexProperties({ ...props, column })}
        }
        `);
    return properties;
  }}
`;
