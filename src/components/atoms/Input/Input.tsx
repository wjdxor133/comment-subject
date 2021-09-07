import React, { ChangeEvent } from "react";
import { InputStyles } from "./Input.styles";

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
