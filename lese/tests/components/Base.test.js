import React from "react";
import renderer from "react-test-renderer";
import Base from "../../src/components/Base";
import { matchers } from "jest-emotion";

expect.extend(matchers);

test("base text props", () => {
  const tree = renderer
    .create(<Base color="red" fontSize="1em" textAlign />)
    .toJSON();

  const tree2 = renderer.create(<Base textAlign="left" />).toJSON();
  expect(tree).toHaveStyleRule("color", "red");
  expect(tree).toHaveStyleRule("font-size", "1em");
  expect(tree).toHaveStyleRule("text-align", "center");
  expect(tree2).toHaveStyleRule("text-align", "left");
});

test("base size props", () => {
  const size = "100px";
  const tree = renderer.create(<Base height={size} width={size} />).toJSON();
  const tree2 = renderer
    .create(<Base height={size} width={size} responsive />)
    .toJSON();
  expect(tree).toHaveStyleRule("height", size);
  expect(tree2).toHaveStyleRule("height", "100%");
  expect(tree2).toHaveStyleRule("max-height", size);

  expect(tree).toHaveStyleRule("width", size);
  expect(tree2).toHaveStyleRule("width", "100%");
  expect(tree2).toHaveStyleRule("max-width", size);
});

test("base layout props", () => {
  const tree = renderer.create(<Base relative margin="16px" padding="16px" />).toJSON();
  expect(tree).toHaveStyleRule("position", "relative");
  expect(tree).toHaveStyleRule("margin", "16px");
  expect(tree).toHaveStyleRule("padding", "16px");
});
