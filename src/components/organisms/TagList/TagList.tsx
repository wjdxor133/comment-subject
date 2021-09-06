import React from "react";
import { TagListStyles } from "./TagList.styles";
import { TagItem } from "components/moucules";

export interface TagListProps {
  tags: number[];
}

function TagList({ tags }: TagListProps) {
  return (
    <TagListStyles>
      {tags.map((tag, idx) => {
        return (
          <TagItem key={idx} src="" alt="">
            {tag}
          </TagItem>
        );
      })}
    </TagListStyles>
  );
}

export default TagList;
