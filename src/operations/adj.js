// import { getRows, getColumns } from "../utils/getRowsColumns";

const adj = (matrixObj) => {
    const { rows, columns} = matrixObj;
    // console.log(matrix);
    // const copyMatrix = matrix;
    // const arrayColumns = getColumns(matrixObj);
    // const arrayRows = getRows(matrixObj);

    // console.log(copyMatrix);

    if(rows !== columns){
        return "Sorry but the matrix not is quadratic";
    }

    // const copyMatrix = matrix;
    // console.log(matrix)
    // for(let numBig of matrix){
    //     let thisIsSelectRow = [];
    //     let thisIsSelectColumn = [];
    //     for(let selectRow of arrayRows){
    //         for(let num of selectRow){
    //             if(num === 1){
    //                 thisIsSelectRow = selectRow;
    //                 break;
    //             }
    //         }
    //     }
    //     for(let selectColumn of arrayColumns){
    //         for(let num of selectColumn){
    //             if(num === 1){
    //                 thisIsSelectColumn = selectColumn;
    //                 break;
    //             }
    //         }
    //     }
    //     for(let numColumn of thisIsSelectRow){
    //         console.log(numColumn);
    //         if(numColumn === numBig){
    //             const index = copyMatrix.indexOf(numBig);
    //             copyMatrix.splice(index, 1);
    //         }
    //     }
    // }

    // console.log("copy matrix");
    // console.log(copyMatrix);

    // for(index in arrayRows){
    //     const num = index + 1;
    //     for(i in arrayRows[index]){
    //         const A = (-1)**(num + (i + 1)) * determinantRest;
    //     }
    // }

    return "hola";
}

export default adj;

    // const adj = [];
    // const index = []

    // for(let i in arrayRows){
    //     arrayRows[i].map(num => {

    //         const idx = matrix.indexOf(num);
    //         while(idx !== -1){
    //             index.push(idx);
    //             idx = matrix.indexOf(num, idx + 1);
    //         }
    //     })
    // }

    // arrayColumns.map(num => {
    //     const idx = matrix.indexOf(num);
    //     while(idx !== -1){
    //         index.push(idx);
    //         idx = matrix.indexOf(num, idx + 1);
    //     }
    // })
    // console.log(index);
