import React from "react";
import { OptionStyles } from "./Option.styles";

export interface OptionProps {
  value: string;
  children: string;
}

function Option({ value, children }: OptionProps) {
  return <OptionStyles value={value}>{children}</OptionStyles>;
}

export default Option;
