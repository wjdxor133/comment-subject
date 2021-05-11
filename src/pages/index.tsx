import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { query as q } from 'faunadb';

import LunchValue from '../components/LunchValue';
import { imgURLObj, nameTypes, defaultValueList } from '../data';
import db from '../db';

const Title = styled.div`
    padding-top: 16px;
    margin-bottom: 16px;
    color: black;
    font-size: 28px;
    font-weight: bold;
`;

export default function Home() {
    const defaultTotalValue = 1350000;
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const nameList: any = Object.keys(imgURLObj);

    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<any>();
    const [selectedName, setSelectedName] = useState<nameTypes>('강현');
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

    const getTotalValue: any = (valueList: any) => {
        const values = Object.values(valueList);
        return values.reduce((acc: any, cur) => acc + cur, 0);
    };

    const percentLeftTotalvalue = Math.floor(
        ((defaultTotalValue - getTotalValue(valueList)) / defaultTotalValue) *
            100
    );

    useEffect(() => {
        const defaultSelectedName: any = localStorage.getItem(
            'defaultSelectedName'
        );
        console.log(defaultSelectedName);
        setSelectedName(defaultSelectedName || '강현');

        setValueListFromDB();
    }, []);

    console.log(value);
    return (
        <div style={{ margin: '0px 16px' }}>
            <Title>오늘 먹은 점심 값은?</Title>
            <div style={{ marginBottom: 16, height: 36 }}>
                <select
                    style={{
                        marginRight: 16,
                        height: 36,
                        width: 72,
                        border: '1px solid grey',
                        borderRadius: 8,
                        fontSize: 20,
                    }}
                    onChange={handleChangeName}
                >
                    {nameList.map((name: nameTypes, i: number) => (
                        <option
                            key={i}
                            value={name}
                            selected={name == selectedName}
                        >
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
                    {nameList.map((name: nameTypes, i: number) => (
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
