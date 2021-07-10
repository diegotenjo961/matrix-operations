export const results = (operation) => {
    switch(operation){
        case "determinant":
            return null
        case "adj":
            return null
        case "inverse":
            return null
        default:
            return null
    }
}

export const validateOperation = (operation) => {
    switch(operation){
        case "determinant":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "determinant",
            }
        case "det":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "determinant",
            }
        case "determinante":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "determinant",
            }
        case "adj":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "adj",
            }
        case "adjunta":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "adj",
            }
        case "inverse":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "inverse",
            }
        case "inversa":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "inverse",
            }
        case "inv":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "inverse",
            }
        case "-1":
            return {
                isOperation: true,
                twoMatrix: false,
                operation: "inverse",
            }
        default:
            return {
                isOperation: false,
                operation: null,
            }
    }
}

