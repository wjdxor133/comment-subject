import React from "react";
import styled from "styled-components";

interface AvatarProps {
  src: string;
  alt: string;
  isSelected?: boolean;
}

function Avatar({ src, alt, isSelected }: AvatarProps) {
  return (
    <AvatarStyles src={src} alt={alt} isSelected={isSelected}></AvatarStyles>
  );
}

export default Avatar;

export const AvatarStyles = styled.img<AvatarProps>`
  display: flex;
  align-items: center;
  height: 40px;
  width: 40px;
  border: ${({ isSelected }) => isSelected && "2px solid grey"};
  border-radius: 8px;
`;
