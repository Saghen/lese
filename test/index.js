import React from "react";
import { render } from "react-dom";

import html from './index.html'

import { helpers, Base, Button, Container, Grid, Image, Link } from "../src/";

render(
  <Container separation="16px">
    <Container column xAlign>
      <Button>Primary</Button>
      <Link href="#">
        Some Link
      </Link>
    </Container>
    <Grid columns="400px 400px" yAlign xAlign="start">
      <Button wide secondary>
        Button
      </Button>
      <Image src="https://i.imgur.com/ojJiFPT.png" responsive />
    </Grid>
  </Container>,
  document.querySelector("#root")
);
