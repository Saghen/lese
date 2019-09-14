import styled from "@emotion/styled";
import Container from "./Container";

function getButtonProperties({ secondary, text, background, wide, noHover }) {
  return {
    color: secondary ? background : text,
    background: secondary ? "transparent" : background,
    border: `2px solid ${background}`,
    padding: wide ? "12px 36px" : "12px 24px",
    transition: "0.2s all",
    cursor: "pointer",
    textAlign: "center",
    ":hover": !noHover && {
      backgroundColor: secondary ? background : "transparent",
      color: secondary ? text : background
    }
  };
}

const Button = styled(Container)(getButtonProperties).withComponent("a");
Button.defaultProps = { background: "#000", text: "#fff", yAlign: true };

export default Button;
