import React from "react";
import { render } from "react-dom";

import html from './index.html'

import { helpers, Base, Button, Container, Grid, Image } from "../index";

render(
  <div>
    <Container>
      <Button>Hello</Button>
    </Container>
  </div>,
  document.querySelector("#root")
);
