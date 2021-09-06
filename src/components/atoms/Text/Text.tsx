import React from "react";
import { TextStyles } from "./Text.styles";

export interface TextProps {
  as: "h3" | "span" | "p";
  typography: "large" | "regular" | "small";
  color: "black" | "white";
  children: string;
}

function Text({ as, typography, color, children }: TextProps) {
  return (
    <TextStyles as={as} typography={typography} color={color}>
      {children}
    </TextStyles>
  );
}

export default Text;
