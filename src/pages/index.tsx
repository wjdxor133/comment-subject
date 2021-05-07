import { useState } from 'react';
import styled from 'styled-components';
import LunchValue from '../components/LunchValue';
import { imgURLObj, nameTypes } from '../data';

const Title = styled.div`
    margin: 16px 0px;
    color: black;
    font-size: 36px;
    font-family: 'Arial';
`;

export default function Home() {
    const [value, setValue] = useState();
    const [name, setName] = useState<nameTypes>('강현');
    const [valueList, setValueList] = useState<any>({
        강현: '0',
        경찬: '0',
        규홍: '0',
        기석: '0',
        수민: '0',
        연진: '0',
        연문: '0',
        영호: '0',
        정욱: '0',
    });

    const handleChangeName = (e: any) => {
        setName(e.target.value);
    };
    const handleChangeValue = (e: any) => {
        setValue(e.target.value);
    };
    const handleClick = () => {
        setValueList((prev: any) => {
            prev[name] = value;
            console.log(prev);
            return { ...prev };
        });
    };

    const nameList: any = Object.keys(imgURLObj);

    return (
        <div style={{ margin: '0px 16px' }}>
            <Title>
                오늘 먹은 <span style={{ fontWeight: 'bold' }}>점심</span>값은?
            </Title>
            <div style={{ marginBottom: 16 }}>
                <select
                    style={{ marginRight: 16, width: 72, fontSize: 24 }}
                    onChange={handleChangeName}
                >
                    {nameList.map((name: nameTypes, i: number) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <input
                    style={{
                        width: 88,
                        border: 'none',
                        borderBottom: '1px solid grey',
                        fontSize: 24,
                    }}
                    value={value}
                    onChange={handleChangeValue}
                />
                <span style={{ fontSize: 24, marginRight: 16 }}>원</span>
                <button style={{ fontSize: 24 }} onClick={handleClick}>
                    입력
                </button>
            </div>
            <div>
                {nameList.map((name: nameTypes, i: number) => (
                    <LunchValue key={i} name={name} value={valueList[name]} />
                ))}
            </div>
        </div>
    );
}
