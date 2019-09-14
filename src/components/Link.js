import styled from "styled-components";
import Base from "./Base";

const colorDefault = "#0000EE";

export default styled(Base).attrs(props => {
  props.color = props.color || colorDefault;

  return {
    as: "a",
    color: props.color,
    relative: true,
    display: "inline-block"
  };
})`
  text-decoration: none;
  cursor: pointer;

  ::after {
    ${({ underline }) =>
      underline || (underline === undefined && "content: '';")}
    background-color: ${props => props.color};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    width: 0;
    transition: 0.2s width;
  }

  :hover::after {
    width: 100%;
  }
`;
