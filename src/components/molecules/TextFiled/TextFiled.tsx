import React, { ChangeEvent } from "react";
import { TextFiledStyles } from "./TextFiled.styles";
import { Text, Input } from "components/atoms";

export interface TextFiledProps {
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextFiled({ type, value, onChange }: TextFiledProps) {
  return (
    <TextFiledStyles>
      <Input type={type} value={value} onChange={onChange} />
      <Text as="span" typography="regular" color="black">
        원
      </Text>
    </TextFiledStyles>
  );
}

export default TextFiled;
