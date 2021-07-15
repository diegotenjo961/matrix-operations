import React from "react";

import sumMinus from "../../operations/sumMinus";

import FigureMatrix from "../FigureMatrix";


const SumMinus = (props) => {
    const {response1, response2, operation} = props.obj;

    if(response1.rows !== response2.rows || response1.columns !== response2.columns){
        return <p className="text-danger">The dimentions of the matrixs is not equal</p>
    }

    return(
         <div className="container-good-matrix good-text">
            <p>
                A 
                {operation === "sum" ? "+" : "-"}
                B =
            </p>
            <FigureMatrix matrixObj = {{
                matrix: sumMinus(props.obj),
                columns: response1.columns
            }}/>
        </div>
    )
}

export default SumMinus;