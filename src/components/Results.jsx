import React, { useState, useEffect } from "react";

import validateMatrix from "../utils/validateMatrix";

import Determinant from "./operations/Determinant";
import Transposed from "./operations/Transposed";
import Adj from "./operations/Adj";
import Inverse from "./operations/Inverse";
import Multiply from "./operations/Multiply";
import SumMinus from "./operations/SumMinus";

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

    if(error){
        return <p className="text-danger">{error}</p>;
    }

    if(response1.matrix === undefined){
        return <p>Loading...</p>
    }

    switch(operation){
        case "determinant":
            return <Determinant matrixObj={response1}/>
        case "adj":
            return <Adj matrixObj={response1} />
        case "transposed":
            return <Transposed matrixObj={response1} />
        case "inverse":
            return <Inverse matrixObj={response1}/>
        case "multiply":
            return <Multiply obj={{response1, response2}} />
        case "sum":
            return <SumMinus obj={{response1, response2, operation: "sum"}}/>
        case "minus":
            return <SumMinus obj={{response1, response2, operation: "minus"}}/>
        default:
            console.log ("nose")
            return <p>Nose</p>
    }
}

export default Results;