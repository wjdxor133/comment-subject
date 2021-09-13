import React from "react";
import styled from "styled-components";

interface OptionProps {
  value: string;
  children: string;
}

function Option({ value, children }: OptionProps) {
  return <OptionStyles value={value}>{children}</OptionStyles>;
}

export default Option;

const OptionStyles = styled.option``;
