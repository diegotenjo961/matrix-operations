import React from "react";
import multiply from "../../operations/multiply";

import FigureMatrix from "../FigureMatrix";

const Multiply = (props) => {
    const { response1, response2 } = props.obj;

    if(response1.columns !== response2.rows){
        return <p className="text-danger">The rows for the matrix A should be equal to columns matrix B</p>
    }

    return (
        <div className="container-good-matrix good-text">
            <p>
                A . B =
            </p>
            <FigureMatrix matrixObj = {{
                matrix: multiply(props.obj),
                columns: response2.columns,
            }}/>
        </div>
    )
}

export default Multiply;