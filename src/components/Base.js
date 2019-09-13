import {
  getTextProperties,
  getSizeProperties,
  getLayoutProperties,
  getColouringProperties
} from "../helpers";

import styled, { css } from "styled-components";

export default styled.div`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
  ${getColouringProperties}
`;
