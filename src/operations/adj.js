import { deleteRow, deleteColumn } from "../utils/deleteRowsColumn";
import determinant from "../operations/determinant";

const adj = (matrixObj) => {
    const { matrix, rows, columns} = matrixObj;

    const indexFirstRow = [];
    let numColumn = 0;
    for(let i = 0; i < rows; i++){
        indexFirstRow.push(numColumn);
        numColumn += (columns - 1);
    }

    let positionI = 1;
    let positionJ = 1;
    const positionCount = () => {
        if(positionJ === columns){
            positionJ = 1;
            positionI += 1;
        }
        else{
            positionJ += 1;
        }
    }

    const adj = [];
    for(let index in matrix){
        const instanceDeleteRow = deleteRow(matrixObj, index);
        const rest = deleteColumn({
            ...matrixObj,
            matrix: instanceDeleteRow,
            rows: rows - 1,
        }, indexFirstRow[positionJ - 1]);

        const detRest = determinant({
            matrix: rest,
            rows: rows - 1,
            columns: columns - 1,
        });

        const A = (-1)**(positionI + positionJ) * detRest;
        adj.push(A);
        positionCount();
    }

    return adj;
}

export default adj;