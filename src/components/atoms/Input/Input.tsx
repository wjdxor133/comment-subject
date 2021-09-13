import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, onChange, ...props }, ref) => (
    <InputStyles {...props} ref={ref} onChange={onChange}></InputStyles>
  )
);

export default Input;

const InputStyles = styled.input`
  width: 80px;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 20px;
`;
