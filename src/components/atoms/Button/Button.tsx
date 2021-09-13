import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, ...props }, ref) => (
    <ButtonStyles {...props} ref={ref} onClick={onClick}>
      {children}
    </ButtonStyles>
  )
);

export default Button;

const ButtonStyles = styled.button`
  height: 36px;
  width: 64px;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  font-size: 20px;
  cursor: pointer;
`;
