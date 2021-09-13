import React from "react";
import styled from "styled-components";
import { Avatar, Text } from "components/atoms";
import { query as q } from "faunadb";
import db from "db";

interface TagItemProps {
  name: string;
  isSelected?: boolean;
  value: string;
  valueList: ValueList;
  setValueList: any;
  loading: boolean;
  setLoading: any;
  Ref: any;
  imgURLObj: ImgURLObj;
}

type ValueList = {
  [key: string]: number;
};

type ImgURLObj = {
  [key: string]: string;
};

function TagItem({
  name,
  isSelected,
  value,
  valueList,
  setValueList,
  loading,
  setLoading,
  Ref,
  imgURLObj,
}: TagItemProps) {
  const handleClickToResetValue = async () => {
    if (isSelected) {
      setLoading(true);

      const { data } = await db.query<any>(
        q.Update(Ref, {
          data: {
            ...valueList,
            [name]: 0,
          },
        })
      );
      setValueList(data);

      setLoading(false);
    }
  };

  return (
    <TagItemStyles onClick={handleClickToResetValue}>
      <Avatar
        src={imgURLObj[name]}
        alt={`${imgURLObj[name]}의 이미지`}
        isSelected={isSelected}
      />
      <Text as="p" typography="regular" color="black">
        {`${loading ? "..." : value}원`}
      </Text>
    </TagItemStyles>
  );
}

export default TagItem;

const TagItemStyles = styled.li`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
