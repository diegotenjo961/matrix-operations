import { getColumns } from "../utils/getRowsColumns";

const transposed = (matrixObj) => {
    const numbersCol = getColumns(matrixObj);

    const result = [];

    for(let array of numbersCol){
        for(let num of array){
            result.push(num);
        }
    }

    return result;
}

export default transposed;