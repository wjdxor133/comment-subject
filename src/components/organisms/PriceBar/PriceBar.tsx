import React from "react";
import { PriceBarStyles } from "./PriceBar.styles";
import { Text } from "components/atoms";
import { Bar } from "components/molecules";
import { getTotalValue } from "../../../util";
import { useRecoilValue } from "recoil";
import { nameListState, valueListState } from "components/state";

function PriceBar() {
  const nameList = useRecoilValue<string[]>(nameListState);
  const defaultTotalValue = nameList.length * 150000;
  const valueList = useRecoilValue<any>(valueListState);

  return (
    <PriceBarStyles>
      <Bar
        defaultTotalValue={defaultTotalValue}
        valueList={valueList}
        getTotalValue={getTotalValue}
      />
      <Text
        as="span"
        typography="regular"
        color="black"
        weight="bold"
        align="center"
      >
        {`${new Date().getMonth() + 1}월 : ${getTotalValue(valueList)}원`}
      </Text>
    </PriceBarStyles>
  );
}

export default PriceBar;
