import adj from "./adj";
import transposed from "./transposed";
import determinant from "./determinant";

const inverse = (matrixObj) => {
    const det = determinant(matrixObj);
    const trans = transposed({
        ...matrixObj,
        matrix: adj(matrixObj),
    });

    const result = [];
    const displayResult = [];

    for(let num of trans){
        result.push(num / det);
        displayResult.push(`${num}/${det}`);
    }

    return { result, displayResult };
}

export default inverse;