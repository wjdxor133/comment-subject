import styled from "styled-components";
import { AvatarProps } from "./Avatar";

export const AvatarStyles = styled.img<AvatarProps>`
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  border: ${({ isSelected }) => isSelected && "2px solid grey"};
  border-radius: 8px;
`;
