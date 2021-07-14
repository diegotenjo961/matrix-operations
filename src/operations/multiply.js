import { getColumns, getRows } from "../utils/getRowsColumns";

const multiply = (obj) => {
    const { response1, response2 } = obj;
    const rowsResponse1 = getRows(response1);
    const columnsResposne2 =  getColumns(response2);

    const result = [];
    for(let indexRow in rowsResponse1){
        for(let arrayColumn of columnsResposne2){
            const resultMultiply = []
            for(let indx in rowsResponse1[indexRow]){
                const multiply = rowsResponse1[indexRow][indx] * arrayColumn[indx];
                resultMultiply.push(multiply);
            }
            let sum = 0;
            for(let mul of resultMultiply){
                sum += mul;
            }
            result.push(sum);
        }
    }

    return result;
}

export default multiply;