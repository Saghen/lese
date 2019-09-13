import styled, { css } from "styled-components";
import Base from "./Base";

import { getGridProperties } from "../helpers";

export default styled(Base)`
  ${getGridProperties}
`;
