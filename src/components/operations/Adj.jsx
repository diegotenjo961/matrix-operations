import React from "react";

import adj from "../../operations/adj";

import FigureMatrix from "../FigureMatrix";

const Adj = (props) => {
    const matrixObj = props.matrixObj;

    if(matrixObj.rows !== matrixObj.columns){
        return <p className="text-danger">Sorry but the matrix is not quadratic</p>
    }
    return(
        <div className="container-good-matrix good-text">
            <p>
                <small>adj</small><span>A</span> =
            </p>
            <FigureMatrix matrixObj = {{
                ...matrixObj,
                matrix: adj(matrixObj),
            }}/>
        </div>
    )
}

export default Adj;