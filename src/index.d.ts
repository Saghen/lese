import React from "react";

interface BaseProps {
  color?: string;
  fontSize?: string;
  textAlign?: boolean | string;
  height?: string;
  width?: string;
  position?: boolean;
  margin?: string;
  padding?: string;
}
declare const Base: React.SFC<BaseProps>;

interface FlexChildProps {
  xAlignSelf?: boolean | string;
  yAlignSelf?: boolean | string;
}

interface FlexProps extends BaseProps {
  column?: boolean
  xAlign?: boolean | string;
  yAlign?: boolean | string;
  noMarginReset?: boolean;
  separation?: string;
  wrap?: boolean | string;
  // children?: [React.SFC<FlexChildProps>];
}
declare const Flex: React.SFC<FlexProps>;

interface GridChildProps {
  column?: string;
  row?: string;
}

interface GridProps extends BaseProps {
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
  // children?: [React.SFC<GridChildProps>];
}
declare const Grid: React.SFC<GridProps>;

interface ImageProps {
  responsive?: boolean;
  center?: boolean;
  cover?: boolean;
}
declare const Image: React.SFC<ImageProps>;

declare type PropertyHandler = (props: object) => string;
interface PropertyOptions {
  default?: string;
  handler?: PropertyHandler;
  property?: string
}

declare function propertyGenerator(
  properties: Array<[string, PropertyOptions | PropertyHandler]>
);

export { Base, BaseProps, Flex, FlexProps, FlexChildProps, Grid, GridProps, GridChildProps, Image, ImageProps, propertyGenerator };
