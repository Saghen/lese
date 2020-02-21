import styled from "styled-components";
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
  ["align", { property: "place-items", default: "center center" }]
]);

const getChildGridProperties = propertyGenerator([
  ["column", { property: "grid-column" }],
  ["row", { property: "grid-row" }]
]);

export default styled(Base)`
  display: grid;
  ${getGridProperties}
  ${({ children }) => {
    const childrenArray = Children.toArray(children).filter(
      elem => typeof elem !== "string"
    );

    const properties = [];
    for (const [i, { props }] of childrenArray.entries()) {
      if (props.column || props.row)
        properties.push(`
        > *:not(style):nth-of-type(${i + 1}) {
          ${getChildGridProperties(props)}
        }
        `);
    }

    return properties;
  }}
`;