import React from "react";
import { Column, Row } from "../../src/components/Flex";
import { matchers } from "@emotion/jest";
import { renderComponent } from "./helpers";

expect.extend(matchers);

it("should use default values when passed true", () => {
  expect(renderComponent(<Row reverse />)).toHaveStyleRule("flex-direction", "row-reverse");
  expect(renderComponent(<Row xAlign />)).toHaveStyleRule("justify-content", "center");
  expect(renderComponent(<Row yAlign />)).toHaveStyleRule("align-items", "center");
  expect(renderComponent(<Row wrap />)).toHaveStyleRule("flex-wrap", "wrap");

  expect(renderComponent(<Column reverse />)).toHaveStyleRule("flex-direction", "column-reverse");
  expect(renderComponent(<Column xAlign />)).toHaveStyleRule("align-items", "center");
  expect(renderComponent(<Column yAlign />)).toHaveStyleRule("justify-content", "center");
  expect(renderComponent(<Column wrap />)).toHaveStyleRule("flex-wrap", "wrap");
});

it("should use values passed as props", () => {
  expect(renderComponent(<Row xAlign="flex-start" />)).toHaveStyleRule("justify-content", "flex-start");
  expect(renderComponent(<Row yAlign="flex-end" />)).toHaveStyleRule("align-items", "flex-end");
  expect(renderComponent(<Row wrap="wrap-reverse" />)).toHaveStyleRule("flex-wrap", "wrap-reverse");

  expect(renderComponent(<Column xAlign="flex-start" />)).toHaveStyleRule("align-items", "flex-start");
  expect(renderComponent(<Column yAlign="flex-end" />)).toHaveStyleRule("justify-content", "flex-end");
  expect(renderComponent(<Column wrap="wrap-reverse" />)).toHaveStyleRule("flex-wrap", "wrap-reverse");
});

it("should separate items via the separation prop", () => {
  expect(renderComponent(<Row separation="8px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="8px 12px ...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="8px ...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="...16px 8px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="8px ...16px 12px" />)).toMatchSnapshot();
  expect(renderComponent(<Row separation="8px 10px ...16px 12px 14px" />)).toMatchSnapshot();

  expect(renderComponent(<Column separation="8px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="8px 12px ...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="8px ...16px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="...16px 8px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="8px ...16px 12px" />)).toMatchSnapshot();
  expect(renderComponent(<Column separation="8px 10px ...16px 12px 14px" />)).toMatchSnapshot();
});
