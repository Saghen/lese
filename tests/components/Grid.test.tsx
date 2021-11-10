import React from "react";
import Grid from "../../src/components/Grid";
import { matchers } from "@emotion/jest";
import { renderComponent } from "./helpers";

expect.extend(matchers);

test("grid layout props", () => {
  expect(
    renderComponent(<Grid columns="auto auto" rows="auto auto" columnGap="8px" rowGap="8px" gap="8px" />)
  ).toMatchSnapshot();
  expect(renderComponent(<Grid autoColumns="auto" autoRows="auto" />)).toMatchSnapshot();
  expect(
    renderComponent(
      <Grid xAlign yAlign align>
        <div>Test</div>
      </Grid>
    )
  ).toMatchSnapshot();
  expect(
    renderComponent(
      <Grid xAlign="stretch" yAlign="end" align="normal start">
        <div>Test</div>
      </Grid>
    )
  ).toMatchSnapshot();
});
