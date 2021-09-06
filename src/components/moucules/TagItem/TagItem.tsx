import React from "react";
import { TagItemStyles } from "./TagItem.styles";
import { Avatar, Text } from "components/atoms";

export interface TagItemProps {
  src: string;
  alt: string;
  price: string;
}

function TagItem({ src, alt, price }: TagItemProps) {
  return (
    <TagItemStyles>
      <Avatar src={src} alt={alt} />
      <Text as="p" typography="large" color="black">
        {price}
      </Text>
    </TagItemStyles>
  );
}

export default TagItem;
