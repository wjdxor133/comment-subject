import { useEffect } from "react";
import { query as q } from "faunadb";
import db from "db";
import { defaultValueList } from "data";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  loadingState,
  selectNameState,
  nameListState,
  valueListState,
  refState,
} from "components/state";

import { MainTemplate } from "components/templates";

export default function Home() {
  const nameList: string[] = Object.keys(defaultValueList);
  const setNameList = useSetRecoilState<any>(nameListState);
  const setLoading = useSetRecoilState(loadingState);
  const setSelectedName = useSetRecoilState(selectNameState);
  const setValueList = useSetRecoilState(valueListState);
  const ref = useRecoilValue(refState);

  const setValueListFromDB = async () => {
    setLoading(true);

    const { data } = await db.query<any>(q.Get(ref));
    console.log("data from DB", data);
    setValueList(data);

    setLoading(false);
  };

  // 초기 렌더링
  useEffect(() => {
    const defaultSelectedName: any = localStorage.getItem(
      "defaultSelectedName"
    );
    console.log(defaultSelectedName);
    setSelectedName(defaultSelectedName || nameList[0]);
    setNameList(nameList);

    setValueListFromDB();
  }, []);

  return (
    <>
      <MainTemplate />
    </>
  );
}
