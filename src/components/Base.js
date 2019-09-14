import {
  getTextProperties,
  getSizeProperties,
  getLayoutProperties,
  getCosmeticProperties
} from "../helpers";

import styled from "@emotion/styled";

export default styled.div`
  ${getLayoutProperties}
  ${getSizeProperties}
  ${getTextProperties}
  ${getCosmeticProperties}
`;
