export const getTotalValue: any = (valueList: any) => {
    const values = Object.values(valueList);
    return values.reduce((acc: any, cur) => acc + cur, 0);
};
