import React from "react";
import { AvatarStyles } from "./Avatar.styles";

export interface AvatarProps {
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
