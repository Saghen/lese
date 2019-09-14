import styled from "@emotion/styled";
import Base from "./Base";

import { getGridProperties } from "../helpers";

export default styled(Base)`
  display: grid;
  ${getGridProperties}
`;
