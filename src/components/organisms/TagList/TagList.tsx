import React from "react";
import { TagListStyles } from "./TagList.styles";
import { TagItem } from "components/molecules";
import {
  selectNameState,
  loadingState,
  nameListState,
  valueListState,
  refState,
} from "components/state";
import { useRecoilState, useRecoilValue } from "recoil";
import { imgURLObj } from "data";

function TagList() {
  // 유기체 단계에서 전역 상태를 사용할 수 있다.
  const [loading, setLoading] = useRecoilState(loadingState);
  const nameList = useRecoilValue<string[]>(nameListState);
  const [valueList, setValueList] = useRecoilState<any>(valueListState);
  const selectedName = useRecoilValue(selectNameState);
  const Ref = useRecoilValue(refState);

  return (
    <TagListStyles>
      {nameList.map((name: string) => {
        return (
          <TagItem
            key={name}
            name={name}
            isSelected={selectedName == name}
            value={valueList[name]}
            valueList={valueList}
            setValueList={setValueList}
            loading={loading}
            setLoading={setLoading}
            Ref={Ref}
            imgURLObj={imgURLObj}
          />
        );
      })}
    </TagListStyles>
  );
}

export default TagList;
