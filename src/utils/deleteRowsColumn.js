import transposed from "../operations/transposed";

export const deleteRow = (matrixObj, index) => {
    const { rows, matrix, columns } = matrixObj;
    const copyMatrix = matrix.slice(0);


    let count = 0;
    const counter = (refresh) => {
        if(refresh){
            count = 0;
        }
        else{
            count += 1;
        }
        return count;
    }

    const indexFirstRow = [];

    let numColumn = 0;
    for(let i = 0; i < rows; i++){
        indexFirstRow.push(numColumn);
        numColumn += columns;
    }

    for(let indx in matrix){
        if(count === columns){
            indexFirstRow.shift();
            counter(true);
        }
        if(indx == index){
            copyMatrix.splice(indexFirstRow[0], columns);
        }
        counter();
    }
    return copyMatrix;
}

export const deleteColumn = (matrixObj, index) => {
    const result = deleteRow({
        ...matrixObj,
        matrix: transposed(matrixObj)
    }, index);

    return result;
}