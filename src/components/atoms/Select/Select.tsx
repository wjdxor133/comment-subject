import React from "react";
import { SelectStyle } from "./Select.styles";

export interface SelectProps {
  nameList: string[];
}

function Select({nameList }: SelectProps) {
  return (
    <SelectStyle>
      {nameList.map((name: string) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </SelectStyle>
  );
}

export default Select;
