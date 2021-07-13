const determinant = (matrixObj) => {
    const {matrix, rows, columns} = matrixObj;
    const M = matrix;
    let det = null;

    if(rows !== columns){
        return "Sorry but the matrix not is quadratic";
    }

    switch(rows){
        case 1:
            det = M[0];
            return det;
        case 2:
            const firstDiagonal = M[0] * M[3];
            const otherDiagonal = M[1] * M[2];
            det = firstDiagonal - otherDiagonal;
            // `To find the determinant:\n (${M[0]}) x (${M[3]}) - (${M[1]}) x (${M[2]})`
            return det;
        case 3:
            det = M[0] * M[4] * M[8] + M[1] * M[5] * M[6] + M[2] * M[3] * M[7] - M[2] * M[4] * M[6] - M[0] * M[5] * M[7] - M[1] * M[3] * M[8];
            // `To find the determinant\n(${M[0]}) x (${M[4]}) x (${M[8]}) + (${M[1]}) x (${M[5]}) x (${M[6]}) + (${M[2]}) x (${M[3]}) x (${M[7]}) - (${M[2]}) x (${M[4]}) x (${M[6]}) - (${M[0]}) x (${M[5]}) x (${M[7]}) - (${M[1]}) x (${M[3]}) x (${M[8]})`
            return det;
        default:
            return "Sorry but that determinant is not yet available";
    }
}

export default determinant;