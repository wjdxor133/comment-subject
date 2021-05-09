import { imgURLObj, nameTypes } from "../data";

type LunchValueProps = {
    name: nameTypes;
    value?: string;
    loading?: boolean;
};
const LunchValue = ({ name, value, loading }: LunchValueProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                height: 52,
                margin: "4px 0px",
            }}
        >
            <div>
                <img
                    style={{
                        height: 36,
                        width: 36,
                        border: "1px solid whitesmoke",
                        borderRadius: 8,
                    }}
                    src={imgURLObj[name]}
                />
            </div>
            <div style={{ marginLeft: 8, height: 36 }}>{loading ? "..." : value}원</div>
        </div>
    );
};

export default LunchValue;
