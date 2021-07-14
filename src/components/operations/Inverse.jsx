import React, {useState} from "react";
import inverse from "../../operations/inverse";
import FigureMatrix from "../FigureMatrix";

const Inverse = (props) => {
    const matrixObj = props.matrixObj;
    const [displayDivision, setDisplayDivision] = useState(false);

    if(matrixObj.rows !== matrixObj.columns){
        return <p className="text-danger">Sorry but the matrix is not quadratic</p>
    }

    const result = inverse(matrixObj);

    return(
        <>
            <div className="container-good-matrix good-text">
                <p className="container-potency">
                    <span>A</span><small>-1</small> =
                </p>
                <FigureMatrix matrixObj = {{
                    ...matrixObj,
                    matrix: result.displayResult,
                }}/>
            </div>
            {
                displayDivision && (
                    <div className="container-good-matrix good-text">
                        <p className="container-potency">
                            <span>A</span><small>-1</small> =
                        </p>
                        <FigureMatrix matrixObj = {{
                            ...matrixObj,
                            matrix: result.result,
                        }}/>
                    </div>
                )
            }
            {displayDivision ?(
                    <strong className="question" onClick={() => setDisplayDivision(false)}>
                        Close ?
                    </strong>
                )
                :(
                    <strong className="question" onClick={() => setDisplayDivision(true)}>
                        Do you want display all result ?
                    </strong>
                )
            }
        </>
    )
}

export default Inverse;