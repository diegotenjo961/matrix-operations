import React, { useState, useEffect } from 'react';
import { validateOperation } from "../utils/switchedOperations";
import FormMatrix from "./FormMatrix";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectOperation } from '../reducers/operation';
import { setOperation } from '../reducers/operation';

import '../assets/styles/components/Form.css';

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
            <form className="form-operation">
                <div className="feed__form-group feed__form-operation">
                    <label htmlFor="operation" className="feed__form-label">Operation</label>
                    <input id="operation" name="operation" className="feed__form-input"
                        onChange={handleChange}/>
                </div>

                <div className="feed__form-matrix">
                    <FormMatrix id="1"/>
                    <FormMatrix id="2"/>
                </div>

                <button className="feed__form-button" type="button">
                send
            </button>
            </form>
        </div>
    )
}

export default Form;