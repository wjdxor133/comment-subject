export const getTotalValue: any = (valueList: any) => {
    if (!valueList) return 0;

    const values = Object.values(valueList);
    return values.reduce((acc: any, cur) => acc + cur, 0);
};
