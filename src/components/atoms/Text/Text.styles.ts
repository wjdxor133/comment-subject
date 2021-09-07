import styled, { css } from "styled-components";
import { TextProps } from "./Text";

export const TextStyles = styled.div<TextProps>`
  color: black;
  font-weight: bold;
  color: ${({ color }) => (color === "white" ? "#FFFFFF" : "#000000")};

  ${({ typography }) =>
    typography === "large" &&
    css`
      font-size: 28px;
    `};

  ${({ typography }) =>
    typography === "regular" &&
    css`
      font-size: 20px;
      font-weight: normal;
    `};

  ${({ typography }) =>
    typography === "small" &&
    css`
      font-size: 16px;
    `};

  ${({ weight }) =>
    weight === "bold" &&
    css`
      font-weight: bold;
    `};

  ${({ align }) =>
    align === "center" &&
    css`
      text-align: center;
    `};

  ${({ align }) =>
    align === "right" &&
    css`
      text-align: right;
    `};
`;
