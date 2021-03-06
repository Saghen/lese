import styled from "@emotion/styled";
import Base from "./Base";
import { Children, Fragment, ReactElement } from "react";

import { propertyGenerator } from "../helpers";

export interface FlexProps {
  column?: boolean;
  xAlign?: boolean | string;
  yAlign?: boolean | string;
  noMarginReset?: boolean;
  separation?: string;
  wrap?: boolean | string;
}

export interface FlexChildProps {
  xAlignSelf?: boolean | string;
  yAlignSelf?: boolean | string;
}

const getFlexProperties = propertyGenerator<FlexProps>([
  ["column", () => "flex-direction: column"],
  [
    "xAlign",
    {
      default: "center",
      handler: ({ column, xAlign }) =>
        column ? `align-items: ${xAlign}` : `justify-content: ${xAlign}`,
    },
  ],
  [
    "yAlign",
    {
      default: "center",
      handler: ({ column, yAlign }) =>
        column ? `justify-content: ${yAlign}` : `align-items: ${yAlign}`,
    },
  ],
  [
    "noMarginReset",
    () => `> * {
       margin: 0;
      }`,
  ],
  [
    "separation",
    ({ column, separation }) => `
    > * + * {
      ${column ? `margin-top: ${separation}` : `margin-left: ${separation}`}
    }
    `,
  ],

  ["wrap", { default: "wrap", property: "flex-wrap" }],
]);

const getChildFlexProperties = propertyGenerator<FlexProps & FlexChildProps>([
  [
    "xAlignSelf",
    {
      default: "center",
      handler: ({ column, xAlignSelf }) =>
        column ? `align-self: ${xAlignSelf}` : `justify-self: ${xAlignSelf}`,
    },
  ],
  [
    "yAlignSelf",
    {
      default: "center",
      handler: ({ column, yAlignSelf }) =>
        column ? `justify-self: ${yAlignSelf}` : `align-self: ${yAlignSelf}`,
    },
  ],
]);

export default styled(Base)<React.PropsWithChildren<FlexProps>>`
  display: flex;
  ${getFlexProperties}
  ${({ children, column }) => {
    const childrenArray = Children.toArray(children)
      .filter((elem) => !["string", "number"].includes(typeof elem))
      .map((child: ReactElement): ReactElement | ReactElement[] =>
        child.type === Fragment ? child.props.children || [] : child
      )
      .flat();

    const properties = [];
    for (const [i, { props }] of childrenArray.entries())
      if (props && (props.xAlignSelf || props.yAlignSelf))
        properties.push(`
        > *:nth-child(${
          i + 1
        }) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          ${getChildFlexProperties({ ...props, column })}
        }
        `);
    return properties;
  }}
`;
