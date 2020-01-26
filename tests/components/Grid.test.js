import React from "react";
import renderer from "react-test-renderer";
import Grid from "../../src/components/Grid";
import { matchers } from "jest-emotion";

expect.extend(matchers);

test("grid layout props", () => {
  const treeLayout = renderer
    .create(
      <Grid
        columns="auto auto"
        rows="auto auto"
        columnGap="8px"
        rowGap="8px"
        gap="8px"
      >
        <div>Test</div>
      </Grid>
    )
    .toJSON();

  const treeAutoLayout = renderer
    .create(
      <Grid autoColumns="auto" autoRows="auto">
        <div>Test</div>
      </Grid>
    )
    .toJSON();

  const treeChildLayoutDefault = renderer
    .create(
      <Grid xAlign yAlign align>
        <div>Test</div>
      </Grid>
    )
    .toJSON();

  const treeChildLayout = renderer
    .create(
      <Grid xAlign="stretch" yAlign="end" align="normal start">
        <div>Test</div>
      </Grid>
    )
    .toJSON();

  expect(treeLayout).toMatchSnapshot();
  expect(treeAutoLayout).toMatchSnapshot();
  expect(treeChildLayoutDefault).toMatchSnapshot();
  expect(treeChildLayout).toMatchSnapshot();
});

test("grid child props", () => {
  const tree = renderer
    .create(
      <Grid columns="10px 10px" rows="10px 10px">
        <div column="2" row="2">
          Test
        </div>
      </Grid>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
