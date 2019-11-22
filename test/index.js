import React from "react";
import { render } from "react-dom";

import html from './index.html'

import { helpers, Base, Flex, Grid, Image } from "../src/";

render(
  <Flex separation="16px" fontSize="1.2em">
    <Flex column xAlign separation="24px">
      <Flex xAlignSelf="center">Some test writing</Flex>
      <Flex xAlignSelf="center">More writing</Flex>
    </Flex>
    <Grid columns="400px 400px" yAlign xAlign="start">
      <Image src="https://i.imgur.com/ojJiFPT.png" responsive />
    </Grid>
  </Flex>,
  document.querySelector("#root")
);
