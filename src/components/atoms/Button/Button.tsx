import React from "react";
import { ButtonStyles } from "./Button.styles";

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;
