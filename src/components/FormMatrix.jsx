import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { setMatrix1, selectMatrix1 } from "../reducers/matrix1"
import { setMatrix2, selectMatrix2 } from "../reducers/matrix2"


const FormMatrix = (props) => {
    const { id } = props;
    const [ regMatrix, setRegMatrix ] = useState(false);

    const dispatch = useDispatch();
    const matrix = useSelector(id === "1" ? selectMatrix1 : selectMatrix2);

    const handleChange = (e) => {
        if(e.target.name === "matrix"){
            const pattern = new RegExp(/^[0-9|-\s]+$/g);
            const test = pattern.test(e.target.value);
            setRegMatrix(false);
            if(!test){
                setRegMatrix(true);
            }
        }

        dispatch(id === "1" ?
            setMatrix1({
                ...matrix,
                [e.target.name]: e.target.value
            })
            : setMatrix2({
                ...matrix,
                [e.target.name]: e.target.value
            }))
    }

    return(
        <div className="form-matrix">
            <strong>{matrix.name.toUpperCase()}</strong>
            <div className="feed__form-group">
                <label htmlFor={`column-${id}`} className="feed__form-label">Columns</label>
                <input id={`column-${id}`} name="columns" className="feed__form-input" type="number"
                    onChange={handleChange}
                />
            </div>
            <div className="feed__form-group">
                <label htmlFor={`rows-${id}`} className="feed__form-label">Rows</label>
                <input id={`rows-${id}`} name="rows" className="feed__form-input" type="number"
                    onChange={handleChange}
                />
            </div>
            <div className="feed__form-group">
                <label htmlFor={`matrix-${id}`} className="feed__form-label">Matrix</label>
                <input id={`matrix-${id}`} name="matrix" className="feed__form-input"
                    onChange={handleChange}
                />
                {regMatrix && <p className="text-danger">Just receive numbers and space</p>}
            </div>
        </div>
    )
}

export default FormMatrix;