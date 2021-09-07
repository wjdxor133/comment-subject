import React, { ChangeEvent, useState } from "react";
import { HeaderStyles, Navbar } from "./Header.styles";
import { Text, Button } from "components/atoms";
import { Select, TextFiled } from "components/molecules";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectNameState,
  loadingState,
  nameListState,
  valueListState,
  refState,
} from "components/state";
import { query as q } from "faunadb";
import db from "db";

function Header() {
  const [selectedName, setSelectedName] = useRecoilState(selectNameState);
  const setLoading = useSetRecoilState(loadingState);
  const nameList = useRecoilValue<any>(nameListState);
  const [valueList, setValueList] = useRecoilState<any>(valueListState);
  const [value, setValue] = useState<string>("");
  const ref = useRecoilValue(refState);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChangeName = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedName(e.target.value);
    localStorage.setItem("defaultSelectedName", e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);

    const { data } = await db.query<any>(
      q.Update(ref, {
        data: {
          ...valueList,
          [selectedName]: valueList[selectedName] + Number(value),
        },
      })
    );
    setValueList(data);
    setValue("");

    setLoading(false);
  };

  return (
    <HeaderStyles>
      <Text as="h3" typography="large" color="black" weight="bold">
        오늘 먹은 점심 값은?
      </Text>
      <Navbar>
        <Select
          nameList={nameList}
          value={selectedName}
          onChange={handleChangeName}
        />
        <TextFiled type="number" value={value} onChange={handleChangeValue} />
        <Button onClick={handleClick}>입력</Button>
      </Navbar>
    </HeaderStyles>
  );
}

export default Header;
