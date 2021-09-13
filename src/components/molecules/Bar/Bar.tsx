import React from "react";
import styled from "styled-components";
import { Text } from "components/atoms";

interface BarProps {
  nameList: string[];
  valueList: ValueList;
  getTotalValue: (e: ValueList) => number;
}

type ValueList = {
  [key: string]: number;
};

function Bar({ nameList, valueList, getTotalValue }: BarProps) {
  const defaultTotalValue = nameList.length * 150000;

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

const BarStyles = styled.div<{ percentLeftTotalValue: number }>`
  display: flex;
  justify-content: center;
  height: ${({ percentLeftTotalValue }) => `${percentLeftTotalValue}%`};
  background: ${({ percentLeftTotalValue }) =>
    `hsl(${percentLeftTotalValue}, 60%, 51%)`};
`;
