import React from "react";
import { AvatarStyles } from "./Avatar.styles";

export interface AvatarProps {
  src: string;
  alt: string;
}

function Avatar({ src, alt }: AvatarProps) {
  return <AvatarStyles src={src} alt={alt}></AvatarStyles>;
}

export default Avatar;
