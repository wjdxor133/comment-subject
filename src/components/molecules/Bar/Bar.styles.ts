import styled from "styled-components";

export const BarStyles = styled.div<{ percentLeftTotalValue: number }>`
  display: flex;
  justify-content: center;
  height: ${({ percentLeftTotalValue }) => `${percentLeftTotalValue}%`};
  background: ${({ percentLeftTotalValue }) =>
    `hsl(${percentLeftTotalValue}, 60%, 51%)`};
`;
