import { imgURLObj, nameTypes } from "../data";

type LunchValueProps = {
    name: nameTypes;
    isSelected: boolean;
    value?: string;
    loading?: boolean;
};
const LunchValue = ({ name, isSelected, value, loading }: LunchValueProps) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                height: 48,
                margin: "6px 0px",
            }}
        >
            <div>
                <img
                    style={{
                        display: "flex",
                        alignItems: "center",
                        height: 40,
                        width: 40,
                        border: isSelected ? "2px solid grey" : undefined,
                        borderRadius: 8,
                    }}
                    src={imgURLObj[name]}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 8,
                    height: 48,
                    borderBottom: isSelected ? "1px solid grey" : undefined,
                }}
            >
                {loading ? "..." : value}원
            </div>
        </div>
    );
};

export default LunchValue;
