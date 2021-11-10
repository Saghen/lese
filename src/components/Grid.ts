import styled from "@emotion/styled";
import Base, { BaseProps } from "./Base";
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

export default styled(Base)<React.PropsWithChildren<GridProps>>`
  display: grid;
  ${getGridProperties}
`;
