import React from "react";
import renderer from "react-test-renderer";
import Base from "../../src/components/Base";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

test("base layout props", () => {
  const tree = renderer.create(<Base relative margin="16px" padding="16px" />).toJSON();
  expect(tree).toHaveStyleRule("position", "relative");
  expect(tree).toHaveStyleRule("margin", "16px");
  expect(tree).toHaveStyleRule("padding", "16px");
});
