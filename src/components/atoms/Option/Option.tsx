import React from "react";
import styled from "styled-components";

export interface OptionProps {
  value: string;
  children: string;
}

function Option({ value, children }: OptionProps) {
  return <OptionStyles value={value}>{children}</OptionStyles>;
}

export default Option;

export const OptionStyles = styled.option``;
