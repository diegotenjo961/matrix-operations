import React, { useState, useEffect } from "react";
import validateMatrix from "../utils/validateMatrix";
import determinant from "../operations/determinant";

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
    }, []);

    console.log(response2);

    if(error){
        return <p>{error}</p>;
    }

    switch(operation){
        case "determinant":
            return <p>{determinant(response1)}</p>
        case "adj":
            return <p>Nose</p>
        case "inverse":
            return <p>Nose</p>
        default:
            console.log ("nose")
            return <p>Nose</p>
    }
}

export default Results;