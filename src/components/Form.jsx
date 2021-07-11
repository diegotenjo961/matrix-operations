import React, { useState, useEffect } from 'react';
import { validateOperation } from "../utils/switchedOperations";
import FormMatrix from "./FormMatrix";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectOperation } from '../reducers/operation';
import { setOperation } from '../reducers/operation';

const Form = () => {
    const [validate, setValidate] = useState({});
    const dispatch = useDispatch();
    const operation = useSelector(selectOperation);

    const handleChange = (e) => {
        dispatch(setOperation({
            operation: e.target.value.toLowerCase(),
        }))
    }

    useEffect(() => {
        setValidate(validateOperation(operation.operation));
    },[dispatch, operation]);

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