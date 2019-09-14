import styled from "@emotion/styled";
import Base from "./Base";

import { getFlexProperties } from "../helpers";

export default styled(Base)`
  display: flex;
  ${getFlexProperties}
`;
