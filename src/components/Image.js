import styled from "@emotion/styled";
import { returnDefault } from "../helpers";

export default styled.img`
  ${({ responsive }) => responsive && "max-width: 100%;"}
  ${({ center }) => center && "object-position: center;"}
  ${({ fit }) => fit && `object-fit: ${returnDefault(fit, "string", "cover")}`}
`;
