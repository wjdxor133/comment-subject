import React from "react";
import styled from "styled-components";
import { Text } from "components/atoms";

export interface BarProps {
  defaultTotalValue: number;
  valueList: ValueList;
  getTotalValue: (e: ValueList) => number;
}

type ValueList = {
  [key: string]: number;
};

function Bar({ defaultTotalValue, valueList, getTotalValue }: BarProps) {
  const percentLeftTotalValue = Math.floor(
    ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) * 100
  );
  return (
    <BarStyles percentLeftTotalValue={percentLeftTotalValue}>
      <Text as="span" typography="regular" color="white">
        {`${defaultTotalValue - getTotalValue(valueList)}원 남음`}
      </Text>
    </BarStyles>
  );
}

export default Bar;

export const BarStyles = styled.div<{ percentLeftTotalValue: number }>`
  display: flex;
  justify-content: center;
  height: ${({ percentLeftTotalValue }) => `${percentLeftTotalValue}%`};
  background: ${({ percentLeftTotalValue }) =>
    `hsl(${percentLeftTotalValue}, 60%, 51%)`};
`;
