import React, { ChangeEvent } from "react";
import { SelectStyle } from "./Select.styles";
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
