import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface InputProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, value, onChange }: InputProps) {
  return (
    <InputStyles type={type} value={value} onChange={onChange}></InputStyles>
  );
}

export default Input;

export const InputStyles = styled.input`
  width: 80px;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 20px;
`;
