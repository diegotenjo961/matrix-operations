import { getRows, getColumns } from "../utils/getRowsColumns";

const adj = (matrixObj) => {
    const { matrix, rows, columns} = matrixObj;

    if(rows !== columns){
        return "Sorry but the matrix not is quadratic";
    }
    const copyMatrix = matrix.slice(0);

    const numbersColumn = getColumns(matrixObj);
    const numbersRows = getRows({
        ...matrixObj,
        matrix: copyMatrix
    });

    return "hola";
}

export default adj;