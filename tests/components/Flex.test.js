import React from "react";
import renderer from "react-test-renderer";
import Flex from "../../src/components/Flex";
import { matchers } from "jest-emotion";

expect.extend(matchers);

test("flex props", () => {
  const treeColumn = renderer
    .create(
      <Flex column xAlign="flex-start" yAlign="flex-end" separation="16px">
        <div>Test</div>
      </Flex>
    )
    .toJSON();

  const treeRow = renderer
    .create(
      <Flex xAlign="flex-start" yAlign="flex-end" separation="16px" wrap>
        <div>Test</div>
      </Flex>
    )
    .toJSON();

  expect(treeColumn).toMatchSnapshot();
  expect(treeRow).toMatchSnapshot();
});

test("flex child props", () => {
  const treeColumn = renderer
    .create(
      <Flex column>
        <Flex xAlignSelf="flex-start" yAlignSelf="flex-end">
          Test
        </Flex>
      </Flex>
    )
    .toJSON();
  const treeRow = renderer
    .create(
      <Flex>
        <Flex xAlignSelf="flex-start" yAlignSelf="flex-end">
          Test
        </Flex>
      </Flex>
    )
    .toJSON();

  const treeMultiple = renderer
    .create(
      <Flex column>
        <Flex xAlignSelf="flex-start" yAlignSelf="flex-end">
          Test
        </Flex>
        <Flex xAlignSelf="flex-start" yAlignSelf="flex-end">
          Test
        </Flex>
      </Flex>
    )
    .toJSON();

  expect(treeColumn).toMatchSnapshot();
  expect(treeRow).toMatchSnapshot();
  expect(treeMultiple).toMatchSnapshot();
});
