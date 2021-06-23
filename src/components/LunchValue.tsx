import { query as q } from 'faunadb';

import { imgURLObj, nameTypes } from '../data';
import db from '../db';

type LunchValueProps = {
    name: nameTypes;
    isSelected: boolean;
    value?: string;
    valueList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
};
const LunchValue = ({
    name,
    isSelected,
    value,
    valueList,
    setValueList,
    loading,
    setLoading,
}: LunchValueProps) => {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const handleClickToResetValue = async () => {
        if (isSelected) {
            setLoading(true);

            const { data } = await db.query<any>(
                q.Update(ref, {
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
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: 44,
                margin: '6px 0px',
            }}
        >
            <div onClick={handleClickToResetValue}>
                <img
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 40,
                        width: 40,
                        border: isSelected ? '2px solid grey' : undefined,
                        borderRadius: 8,
                    }}
                    src={imgURLObj[name]}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 8,
                    height: 48,
                    borderBottom: isSelected ? '1px solid grey' : undefined,
                }}
            >
                {loading ? '...' : value}원
            </div>
        </div>
    );
};

export default LunchValue;
