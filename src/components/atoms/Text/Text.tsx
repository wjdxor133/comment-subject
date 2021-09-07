import React from "react";
import { TextStyles } from "./Text.styles";

export interface TextProps {
  as: "h3" | "span" | "p";
  typography: "large" | "regular" | "small";
  weight?: "bold";
  color: "black" | "white";
  align?: "center" | "right";
  children: string;
}

function Text({ as, typography, weight, color, align, children }: TextProps) {
  return (
    <TextStyles
      as={as}
      typography={typography}
      weight={weight}
      color={color}
      align={align}
    >
      {children}
    </TextStyles>
  );
}

export default Text;
