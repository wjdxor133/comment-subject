import React from "react";
import { BarStyles } from "./Bar.styles";
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
