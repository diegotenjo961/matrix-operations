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
        default:
            return {
                ...state,
                isOperation: false,
                operation: operation,
            }
    }
}

export default validateOperation;