import React, { useState, useEffect } from "react";
import validateMatrix from "../utils/validateMatrix";
import determinant from "../operations/determinant";
import adj from "../operations/adj";
import transposed from "../operations/transposed";
import FigureMatrix from "./FigureMatrix";

import "../assets/styles/components/Results.css";

const Results = (props) => {
    const { operation, matrix1, matrix2, twoMatrix } = props.form;
    const [ error, setError ] = useState(null);
    const [response1, setResponse1] = useState({});
    const [response2, setResponse2] = useState({});

    useEffect(() => {
        const response1 = validateMatrix(matrix1);
        response1.matrix === undefined ?
            ( setError(response1))
            : setResponse1(response1);

        if(twoMatrix){
            const response2 = validateMatrix(matrix2);
            response2.matrix === undefined ?
            ( setError(response2))
            : setResponse2(response2);
        }
    }, [matrix1, matrix2, twoMatrix]);

    console.log(response2);

    if(error){
        return <p className="text-danger">{error}</p>;
    }

    if(response1.matrix === undefined){
        return <p>Loading...</p>
    }

    switch(operation){
        case "determinant":
            return( <p className="ml-2 good-text">
                    DetA = {determinant(response1)}
                </p>)
        case "adj":
            return (
                <p>{adj(response1)}</p>
            )
        case "inverse":
            return <p>Nose</p>
        case "transposed":
            return (
                <div className="container-transposed good-text">
                    <p className="container-potency">
                        <span>A</span><small>t</small> =
                    </p>
                    <FigureMatrix matrixObj = {{
                        matrix: transposed(response1),
                        columns: response1.rows
                    }}/>
                </div>)
        default:
            console.log ("nose")
            return <p>Nose</p>
    }
}

export default Results;