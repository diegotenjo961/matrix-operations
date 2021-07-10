import React, { useState, useEffect } from 'react';
import { validateOperation } from "../utils/switchedOperations";
import FormMatrix from "./FormMatrix";

const Form = () => {
    const [operation, setOperation] = useState("");
    const [validate, setValidate] = useState({});

    const handleChange = (e) => {
        setOperation(e.target.value.toLowerCase());
    }
    sessionStorage.setItem("operation", operation);

    useEffect(() => {
        setValidate(validateOperation(operation));
    }, [operation]);

    console.log(operation);
    console.log(validate);

    return(
        <div>
            <label htmlFor="operation">Operation</label>
            <input id="operation" name="operation" className="feed__form-input"
                onChange={handleChange}/>
            <FormMatrix id="1"/>
            <button className="feed__form-button" id="matrix-button" type="button"
                disabled={!validate.isOperation}>
                {validate.twoMatrix ? "next" : "send"}
            </button>
        </div>
    )
}

export default Form;