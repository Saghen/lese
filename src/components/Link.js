import styled from "@emotion/styled";
import Base from "./Base";

function getLinkProperties({ color, underline, resetColor }) {
  return {
    color: resetColor ? 'inherit' : color,
    textDecoration: "none",
    cursor: "pointer",
    "::after": underline && {
      content: '""',
      backgroundColor: color,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      width: 0,
      transition: "0.2s width"
    },
    ":hover::after": {
      width: "100%"
    }
  };
}

const Link = styled(Base)(getLinkProperties).withComponent("a");
Link.defaultProps = { relative: true, inlineBlock: true, color: "#0000EE" }

export default Link;
