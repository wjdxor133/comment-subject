import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { query as q } from 'faunadb';

import db from '../db';
import { getTotalValue } from '../util';
import { defaultValueList } from '../data';
import { COLLECTION_REF } from '../constant';
import LunchValue from '../components/LunchValue';

const Title = styled.div`
    padding-top: 16px;
    margin-bottom: 16px;
    color: black;
    font-size: 28px;
    font-weight: bold;
`;

export default function Home() {
    const ref = q.Ref(q.Collection('prices'), COLLECTION_REF);
    const nameList: any = Object.keys(defaultValueList);

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<any>();
    const [selectedName, setSelectedName] = useState(nameList[0]);
    const [valueList, setValueList] = useState<any>(defaultValueList);
    const setValueListFromDB = async () => {
        setLoading(true);

        const { data } = await db.query<any>(q.Get(ref));
        console.log('data from DB', data);
        setValueList(data);

        setLoading(false);
    };

    const handleChangeName = (e: any) => {
        setSelectedName(e.target.value);
        localStorage.setItem('defaultSelectedName', e.target.value);
    };
    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
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
        setValue('');

        setLoading(false);
    };

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || nameList[0]);

        setValueListFromDB();
    }, []);

    const defaultTotalValue = nameList.length * 150000;
    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) *
            100
    );

    return (
        <div style={{ margin: '0px 16px' }}>
            <Title>오늘 먹은 점심 값은?</Title>
            <div style={{ marginBottom: 8, height: 36 }}>
                <select
                    style={{
                        marginRight: 16,
                        height: 36,
                        width: 72,
                        border: '1px solid grey',
                        borderRadius: 8,
                        fontSize: 20,
                    }}
                    value={selectedName}
                    onChange={handleChangeName}
                >
                    {nameList.map((name: string) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input
                    type='number'
                    style={{
                        width: 80,
                        border: 'none',
                        borderBottom: '1px solid grey',
                        fontSize: 20,
                    }}
                    value={value}
                    onChange={handleChangeValue}
                />
                <span style={{ fontSize: 20, marginRight: 16 }}>원</span>
                <button
                    style={{
                        height: 36,
                        width: 64,
                        border: '1px solid grey',
                        borderRadius: 8,
                        background: 'white',
                        fontSize: 20,
                    }}
                    disabled={loading}
                    onClick={handleClick}
                >
                    입력
                </button>
            </div>
            <div style={{ display: 'flex', height: '90%' }}>
                <div style={{ flex: 1 }}>
                    {nameList.map((name: string, i: number) => (
                        <LunchValue
                            key={i}
                            name={name}
                            isSelected={selectedName == name}
                            value={valueList[name]}
                            valueList={valueList}
                            setValueList={setValueList}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    ))}
                </div>
                <div style={{ flex: 1 }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column-reverse',
                            height: 'calc(100% - 36px)',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                height: `${percentLeftTotalvalue}%`,
                                width: '100%',
                                background: `hsl(${percentLeftTotalvalue}, 60%, 51%)`,
                                color: 'white',
                            }}
                        >
                            <div>{`${
                                defaultTotalValue - getTotalValue(valueList)
                            }원 남음`}</div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 4,
                            height: 36,
                            fontWeight: 'bold',
                        }}
                    >{`${new Date().getMonth() + 1}월 : ${getTotalValue(
                        valueList
                    )}원`}</div>
                </div>
            </div>
        </div>
    );
}
