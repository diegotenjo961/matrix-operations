const validateMatrix = (matrixObj) => {
    const { matrix, rows, columns} = matrixObj;

    const arrayMatrix = matrix.split(" ");
    const matrixResolve = [];
    const correctNum = parseInt(rows) * parseInt(columns);

    if(correctNum !== arrayMatrix.length){
        return (`You passed ${arrayMatrix.length} numbers to matrix but should by passed ${correctNum} numbers`)
    }
    for(let el of arrayMatrix){
        const validate = isNaN(el);
        if(validate === true){
            return (`${el} not is a number`);
        }
        else{
            matrixResolve.push(parseInt(el));
        }
    }
    return ({
        matrix: matrixResolve,
        rows: parseInt(rows),
        columns: parseInt(columns),
    });
}

export default validateMatrix;