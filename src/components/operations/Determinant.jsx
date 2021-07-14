import React from "react";
import determinant from "../../operations/determinant";

const Determinant = (props) => {
    const matrixObj = props.matrixObj;

    if(matrixObj.rows !== matrixObj.columns){
        return <p className="text-danger">Sorry but the matrix is not quadratic</p>
    }
    return(
        <p className="ml-2 good-text">
            DetA = {determinant(matrixObj)}
        </p>
    )
}

export default Determinant;