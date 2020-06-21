import styled from "@emotion/styled";
import Base from "./Base";

import { Children } from "react";
import { propertyGenerator } from "../helpers";

const getGridProperties = propertyGenerator([
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

const getChildGridProperties = propertyGenerator([
  ["columnSelf", { property: "grid-column" }],
  ["rowSelf", { property: "grid-row" }],
]);

export default styled(Base)`
  display: grid;
  ${getGridProperties}
  ${({ children }) => {
    const childrenArray = Children.toArray(children)
      .filter((elem) => typeof elem !== "string")
      .map((child) => (child.type === Fragment ? child.props.children ?? [] : child))
      .flat();

    const properties = [];
    for (const [i, { props }] of childrenArray.entries()) {
      if (props.columnSelf || props.rowSelf)
        properties.push(`
        > *:nth-child(${i + 1}) /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */ {
          ${getChildGridProperties(props)}
        }
        `);
    }

    return properties;
  }}
`;
