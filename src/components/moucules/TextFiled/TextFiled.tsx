import React from "react";
import { TextFiledStyles } from "./TextFiled.styles";
import { Text, Input } from "components/atoms";

function TextFiled() {
  return (
    <TextFiledStyles>
      <Input />
      <Text as="span" typography="small" color="black">
        원
      </Text>
    </TextFiledStyles>
  );
}

export default TextFiled;
