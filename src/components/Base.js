import {
  getTextProperties,
  getSizeProperties,
  getLayoutProperties,
  getCosmeticProperties
} from "../helpers";

import styled, { css } from "styled-components";

export default styled.div`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
  ${getCosmeticProperties}
`;
