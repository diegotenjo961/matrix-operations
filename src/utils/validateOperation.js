const state = {
    isOperation: true,
    twoMatrix: false,
    operation: null
}

const validateOperation = (operation) => {
    switch(operation){
        case "determinant":
            return {
                ...state,
                operation: "determinant",
            }
        case "det":
            return {
                ...state,
                operation: "determinant",
            }
        case "determinante":
            return {
                ...state,
                operation: "determinant",
            }
        case "adj":
            return {
                ...state,
                operation: "adj",
            }
        case "adjunta":
            return {
                ...state,
                operation: "adj",
            }
        case "inverse":
            return {
                ...state,
                operation: "inverse",
            }
        case "inversa":
            return {
                ...state,
                operation: "inverse",
            }
        case "inv":
            return {
                ...state,
                operation: "inverse",
            }
        case "-1":
            return {
                ...state,
                operation: "inverse",
            }
        case "transposed":
            return {
                ...state,
                operation: "transposed",
            }
        case "trans":
            return {
                ...state,
                operation: "transposed",
            }
        case "transpuesta":
            return {
                ...state,
                operation: "transposed"
            }
        case "t":
            return {
                ...state,
                operation: "transposed"
            }
        case "multiply":
            return {
                ...state,
                operation: "multiply",
                twoMatrix: true,
            }
        case "x":
            return {
                ...state,
                operation: "multiply",
                twoMatrix: true,
            }
        case "+":
            return {
                ...state,
                operation: "sum",
                twoMatrix: true,
            }
        case "sum":
            return {
                ...state,
                operation: "sum",
                twoMatrix: true,
            }
        case "-":
            return {
                ...state,
                operation: "minus",
                twoMatrix: true,
            }
        case "minus":
            return {
                ...state,
                operation: "minus",
                twoMatrix: true,
            }
        default:
            return {
                ...state,
                isOperation: false,
                operation: operation,
            }
    }
}

export default validateOperation;