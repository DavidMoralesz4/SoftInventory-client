import { unparse } from "papaparse";

export const convertToCsv = (data: object[]): string => {
    return unparse(data, {
        header: true,
        skipEmptyLines: true
    })
};
