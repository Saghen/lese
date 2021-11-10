import React from "react";
import { render } from "react-dom";
// import styled from "@emotion/styled";

import './index.html'

import { Column, Grid, Row } from "../src";

const TestComponent = () => <div />;

render(
  <Column
    separation="16px"
    xAlign="center"
    yAlign="center"
    wrap
    relative
    margin="16px"
    padding="16px"
  >
    <Column xAlign separation="24px ...10px 50px">
      <Row>Some test writing</Row>
      <Row>More writing</Row>
      <>
        <div>Test</div>
      </>
      {[<div>Test</div>]}
    </Column>
    <Grid columns="400px 400px" yAlign xAlign="start">
      <TestComponent></TestComponent>
    </Grid>
  </Column>,
  document.querySelector("#root")
);
