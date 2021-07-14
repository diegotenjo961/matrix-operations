export const getRows = (matrixObj) => {
    const { matrix, columns, rows } = matrixObj;
    const copyMatrix = matrix.slice(0);
    const results = [];
    for(let i = 0; i < rows; i++){
        const row = [];
        for(let i = 0; i < columns; i++){
            row.push(copyMatrix.shift());
        }
        results.push(row);
    }
    return results;
}

export const getColumns = (matrixObj) => {
    const { matrix, columns, rows } = matrixObj;
    const results = [];
    for(let i = 0; i < columns; i++){
        const column = [];
        let num = i;
        for(let i = 0; i < rows; i++){
            column.push(matrix[num]);
            num += columns;
        }
        results.push(column);
    }
    return results;
}