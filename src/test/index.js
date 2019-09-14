import React from "react";
import { render } from "react-dom";

import html from './index.html'

import { helpers, Base, Button, Container, Grid, Image, Link } from "../index";

render(
  <div>
    <Container column xAlign>
      <Button>Hello</Button>
      <Link>Some Link</Link>
    </Container>
  </div>,
  document.querySelector("#root")
);
