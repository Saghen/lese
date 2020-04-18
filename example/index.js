import React from "react";
import { render } from "react-dom";

import html from "./index.html";

import { Base, Flex, Grid, Image } from "../src/";

const TestComponent = () => <div></div>

render(
  <Flex
    separation="16px"
    column
    xAlign="center"
    yAlign="center"
    wrap
    fontSize="1.2em"
    style={{ margin: "auto" }}
    color="#000"
    textAlign="center"
    relative
    margin="16px"
    padding="16px"
  >
    <Flex column xAlign separation="24px">
      <Flex xAlignSelf="flex-start">Some test writing</Flex>
      <Flex xAlignSelf="flex-start">More writing</Flex>
      <>
      <div>Test</div>
      </>
    </Flex>
    <Grid columns="400px 400px" yAlign xAlign="start">
      <Image column="2" src="https://i.imgur.com/ojJiFPT.png" responsive />
      <TestComponent></TestComponent>
    </Grid>
  </Flex>,
  document.querySelector("#root")
);
