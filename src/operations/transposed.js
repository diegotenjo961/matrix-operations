import { getColumns } from "../utils/getRowsColumns";

const transposed = (matrixObj) => {
    const { matrix } = matrixObj;
    const copyMatrix = matrix.slice(0);
    const numbersCol = getColumns({
        ...matrixObj,
        matrix: copyMatrix,
    });

    const result = [];

    for(let array of numbersCol){
        for(let num of array){
            result.push(num)
        }
    }

    return result;
}

export default transposed;