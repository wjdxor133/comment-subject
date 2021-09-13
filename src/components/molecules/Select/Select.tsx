import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Option } from "components/atoms";

export interface SelectProps {
  nameList: string[];
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ nameList, value, onChange }: SelectProps) {
  return (
    <SelectStyle value={value} onChange={onChange}>
      {nameList.map((name: string) => (
        <Option key={name} value={name}>
          {name}
        </Option>
      ))}
    </SelectStyle>
  );
}

export default Select;

export const SelectStyle = styled.select`
  margin-right: 16px;
  height: 36px;
  width: 72px;
  border: 1px solid grey;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;
