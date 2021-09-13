import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;

export const ButtonStyles = styled.button`
  height: 36px;
  width: 64px;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;
