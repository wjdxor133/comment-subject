export type nameTypes =
    | '태양'
    | '성현'
    | '은비';

type imgURLObjType = {
    태양: string;
    성현: string;
    은비: string;
};

export const imgURLObj: imgURLObjType = {
    태양: '',
    성현: '',
    은비: '',
};

export const defaultValueList = {
    태양: 0,
    성현: 0,
    은비: 0,
};
