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
    <Grid columns="400px 400px" yAlign="center" xAlign="center">
      <Button>WOW</Button>
      <Image src="https://voicebot.ai/wp-content/uploads/2019/07/www.maxpixel.net-cute-japan-amazon-danbo-cardboard-robot-3781364.jpg" responsive/>
    </Grid>
  </div>,
  document.querySelector("#root")
);
