import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Text, Input } from "components/atoms";

interface TextFiledProps {
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

const TextFiledStyles = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
