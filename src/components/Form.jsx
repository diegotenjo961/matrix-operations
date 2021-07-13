import React, { useState, useEffect } from 'react';
import validateOperation from "../utils/validateOperation";
import FormMatrix from "./FormMatrix";
import Results from "./Results";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectOperation } from '../reducers/operation';
import { selectMatrix1 } from '../reducers/matrix1';
import { selectMatrix2 } from '../reducers/matrix2';
import { setOperation } from '../reducers/operation';

import '../assets/styles/components/Form.css';

const Form = () => {
    const [validate, setValidate] = useState({});
    const [toggleForm, setToggleForm ] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const dispatch = useDispatch();
    const operation = useSelector(selectOperation);
    const matrix1 = useSelector(selectMatrix1);
    const matrix2 = useSelector(selectMatrix2);

    const handleChange = (e) => {
        dispatch(setOperation({
            operation: e.target.value.toLowerCase().trim(),
        }));
        setToggleForm(false);
    }
    const handleClick = () => {
        if(validate.isOperation){
            setDisplayResults(true);
            return setToggleForm(false);
        }
        setToggleForm(true);
    }

    useEffect(() => {
        setValidate(validateOperation(operation.operation));
        setDisplayResults(false);
    },[dispatch, operation, matrix1, matrix2]);

    return(
        <div>
            <form className="form-operation">
                <div className="feed__form-group feed__form-operation">
                    <label htmlFor="operation" className="feed__form-label">Operation</label>
                    <input id="operation" name="operation" className="feed__form-input"
                        onChange={handleChange}/>
                    {toggleForm && <p className="text-danger">{operation.operation} not is an operation</p>}
                </div>

                <div className="feed__form-matrix">
                    <FormMatrix id="1"/>
                    <FormMatrix id="2"/>
                </div>

                <button className="feed__form-button" type="button" onClick={handleClick}>
                    send
                </button>
            </form>

            {displayResults && <Results form={{
                operation: validate.operation,
                matrix1,
                matrix2,
                twoMatrix: validate.twoMatrix,
            }}/>}
        </div>
    )
}

export default Form;