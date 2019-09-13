import styled, { css } from "styled-components";
import Base from './Base';

import { getFlexProperties } from '../helpers';

export default styled(Base)`
  ${getFlexProperties}
`;
