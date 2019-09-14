import styled from "@emotion/styled";
import Container from "./Container";

function getButtonProperties({ secondary, accent, color, wide, padding, noHover }) {
  return {
    color: secondary ? accent : color,
    background: secondary ? "transparent" : accent,
    border: `2px solid ${accent}`,
    padding: wide ? "12px 36px" : padding || "12px 24px",
    transition: "0.2s all",
    cursor: "pointer",
    textAlign: "center",
    ":hover": !noHover && {
      backgroundColor: secondary ? accent : "transparent",
      color: secondary ? color : accent
    }
  };
}

const Button = styled(Container)(getButtonProperties).withComponent("a");
Button.defaultProps = { accent: "#000", color: "#fff", yAlign: true };

export default Button;
