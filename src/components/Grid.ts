import styled from "@emotion/styled";
import Base, { BaseProps } from "./Base";

import { Children, Fragment, ReactElement } from "react";
import { propertyGenerator } from "../helpers";

export interface GridProps extends BaseProps {
  columns?: string;
  rows?: string;
  autoColumns?: string;
  autoRows?: string;
  columnGap?: string;
  rowGap?: string;
  gap?: string;
  xAlign?: boolean | string;
  yAlign?: boolean | string;
  align?: boolean | string;
  // children?: [React.FC<GridChildProps>];
}

export interface GridChildProps {
  columnSelf?: string;
  rowSelf?: string;
}

const getGridProperties = propertyGenerator<GridProps>([
  ["columns", { property: "grid-template-columns" }],
  ["rows", { property: "grid-template-rows" }],
  ["autoColumns", { property: "grid-auto-columns" }],
  ["autoRows", { property: "grid-auto-rows" }],
  ["columnGap", { property: "grid-column-gap" }],
  ["rowGap", { property: "grid-row-gap" }],
  ["gap", { property: "grid-gap" }],
  ["xAlign", { property: "justify-items", default: "center" }],
  ["yAlign", { property: "align-items", default: "center" }],
  ["align", { property: "place-items", default: "center center" }],
]);

const getChildGridProperties = propertyGenerator<GridChildProps>([
  ["columnSelf", { property: "grid-column" }],
  ["rowSelf", { property: "grid-row" }],
]);

export default styled(Base)<React.PropsWithChildren<GridProps>>`
  display: grid;
  ${getGridProperties}
  ${({ children }) => {
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
          ${getChildGridProperties(props)}
        }
        `);
    return properties;
  }}
`;
