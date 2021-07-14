import React from "react";

import transposed from "../../operations/transposed";

import FigureMatrix from "../FigureMatrix";

const Transposed = (props) => {
    const matrixObj = props.matrixObj;

    return(
        <div className="container-good-matrix good-text">
            <p className="container-potency">
                <span>A</span><small>t</small> =
            </p>
            <FigureMatrix matrixObj = {{
                matrix: transposed(matrixObj),
                columns: matrixObj.rows
            }}/>
        </div>
    )
}

export default Transposed;