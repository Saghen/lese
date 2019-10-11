import React from "react";
import { render } from "react-dom";

import html from './index.html'

import { helpers, Base, Button, Flex, Grid, Image, Link } from "../src/";

render(
  <Flex separation="16px" fontSize="0.8em">
    <Flex column xAlign separation="24px">
      <Button>Primary</Button>
      <Link href="#">
        Some Link
      </Link>
    </Flex>
    <Grid columns="400px 400px" yAlign xAlign="start">
      <Button wide secondary>
        Button
      </Button>
      <Image src="https://i.imgur.com/ojJiFPT.png" responsive />
    </Grid>
  </Flex>,
  document.querySelector("#root")
);
