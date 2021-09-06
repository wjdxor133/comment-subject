import React from "react";
import { TagItemStyles } from "./TagItem.styles";
import { Avatar, Text } from "components/atoms";

export interface TagItemProps {
  src: string;
  alt: string;
  children: string | number;
}

function TagItem({ src, alt, children }: TagItemProps) {
  return (
    <TagItemStyles>
      <Avatar src={src} alt={alt} />
      <Text as="p" typography="large" color="black">
        {children}
      </Text>
    </TagItemStyles>
  );
}

export default TagItem;
