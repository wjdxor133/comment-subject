import { useEffect, useState } from "react";
import styled from "styled-components";
import { query as q } from "faunadb";

import LunchValue from "../components/LunchValue";
import { imgURLObj, nameTypes, defaultValueList } from "../data";
import db from "../db";

const Title = styled.div`
    margin: 16px 0px;
    color: black;
    font-size: 28px;
    font-weight: bold;
`;

export default function Home() {
    const ref = q.Ref(q.Collection("prices"), "298076617337471490");

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<number>();
    const [selectedName, setSelectedName] = useState<nameTypes>("강현");
    const [valueList, setValueList] = useState<any>(defaultValueList);

    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));
        console.log("data from DB", data);
        setValueList(data);

        setLoading(false);
    };

    const handleChangeName = (e: any) => {
        setSelectedName(e.target.value);
    };
    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
    };
    const handleClick = async () => {
        setValueList((prev: any) => {
            if (value) {
                if (prev[selectedName]) {
                    prev[selectedName] += value * 100;
                } else {
                    prev[selectedName] = value * 100;
                }
            }
            console.log(prev);
            return { ...prev };
        });
        const { data } = await db.query<any>(
            q.Update(ref, { data: { ...valueList, [selectedName]: valueList[selectedName] + Number(value) * 100 } })
        );
        console.log(data);
    };

    const nameList: any = Object.keys(imgURLObj);

    useEffect(() => {
        setValueListFromDB();
    }, []);

    return (
        <div style={{ margin: "0px 16px" }}>
            <Title>오늘 먹은 점심 값은?</Title>
            <div style={{ marginBottom: 16 }}>
                <select style={{ marginRight: 16, width: 72, fontSize: 24 }} onChange={handleChangeName}>
                    {nameList.map((name: nameTypes, i: number) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    style={{
                        width: 64,
                        border: "none",
                        borderBottom: "1px solid grey",
                        fontSize: 24,
                    }}
                    value={value}
                    onChange={handleChangeValue}
                />
                <span style={{ fontSize: 24, marginRight: 16 }}>00원</span>
                <button style={{ fontSize: 24 }} onClick={handleClick}>
                    입력
                </button>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1, borderRight: "1px solid grey" }}>
                    {nameList.map((name: nameTypes, i: number) => (
                        <LunchValue
                            key={i}
                            name={name}
                            isSelected={selectedName}
                            value={valueList[name]}
                            loading={loading}
                        />
                    ))}
                </div>
                <div style={{ flex: 1 }}>총합</div>
            </div>
        </div>
    );
}
