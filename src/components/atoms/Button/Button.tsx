import React from "react";
import { ButtonStyles } from "./Button.styles";

export interface ButtonProps {
  children: string;
}

function Button({ children }: ButtonProps) {
  return <ButtonStyles>{children}</ButtonStyles>;
}

export default Button;
