import React, { useState, useEffect } from 'react';
import { validateOperation, results } from "../utils/switchedOperations";

const FormMatrix = () => {
    const [operation, setOperation] = useState("");
    const [operationOk, setOperationOk] = useState({});
    const validate = validateOperation(operation);

    const handleOperation = (e) => {
        setOperation(e.target.value.toLowerCase());
    }
    useEffect(() => {
        setOperationOk({
            isOperation: validate.isOperation,
            twoMatrix: validate.twoMatrix,
        });
    }, [validate.isOperation, validate.twoMatrix]);


    return(
        <form className="feed__form-matrix">
            <div>
                <label htmlFor="operation">Operation</label>
                <input id="operation" className="feed__form-input" onChange={handleOperation}/>
            </div>
            <div>
                <label htmlFor="rows-1">Rows</label>
                <input id="rows-1" className="feed__form-input" />
            </div>
            <div>
                <label htmlFor="column-1">Columns</label>
                <input id="column-1" className="feed__form-input" />
            </div>
            <button className="feed__form-button" id="matrix-button"
                disabled={!operationOk.isOperation}>
                {operationOk.twoMatrix ? "next" : "send"}
            </button>
        </form>
    )
}

export default FormMatrix;