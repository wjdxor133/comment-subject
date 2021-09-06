import React from "react";
import { TextStyles } from "./Text.styles";

export interface TextProps {
  as: "h3" | "span" | "p";
  typography: "large" | "regular" | "small";
  children: string;
}

function Text({ as, typography, children }: TextProps) {
  return (
    <TextStyles as={as} typography={typography}>
      {children}
    </TextStyles>
  );
}

export default Text;
