import React from "react";
import renderer from "react-test-renderer";
import Image from "../../src/components/Image";
import { matchers } from "jest-emotion";

expect.extend(matchers);

test("image props", () => {
  const tree = renderer.create(
    <Image responsive center cover src="http://example.com/example.png" />
  );
  expect(tree).toMatchSnapshot();
});
