import styled, { css } from "styled-components";
import Container from "./Container";

const backgroundDefault = "#000";
const textDefault = "#fff";

export default styled(Container).attrs(
  ({ secondary, text, background, wide }) => {
    const propText = text || textDefault;
    const propBackground = background || backgroundDefault;

    text = secondary ? propBackground : propText;
    background = secondary ? propText : propBackground;

    return {
      as: "a",
      yAlign: true,
      text,
      background,
      border: `2px solid ${secondary ? text : background}`,
      color: text,
      padding: wide ? "12px 36px" : "12px 24px"
    };
  }
)`
  transition: 0.2s all;
  cursor: pointer;
  text-align: center;

  ${({ noHover }) =>
    !noHover &&
    css`
      :hover {
        background-color: ${({ text }) => text};
        color: ${({ background }) => background};
      }
    `}
`;
