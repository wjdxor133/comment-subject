import React from "react";
import { PriceBarStyles, PriceBarWrapper } from "./PriceBar.styles";
import { Text } from "components/atoms";

export interface PriceBarProps {
  price: string;
}

function PriceBar({ price }: PriceBarProps) {
  return (
    <PriceBarStyles>
      <PriceBarWrapper>
        <Text as="p" typography="large" color="white">
          {price}
        </Text>
      </PriceBarWrapper>
      <Text as="p" typography="large" color="black">
        {price}
      </Text>
    </PriceBarStyles>
  );
}

export default PriceBar;
