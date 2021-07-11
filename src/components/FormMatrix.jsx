import React from 'react';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setMatrix1, selectMatrix1 } from "../reducers/matrix1"
import { setMatrix2, selectMatrix2 } from "../reducers/matrix2"


const FormMatrix = (props) => {
    const { id } = props;

    const dispatch = useDispatch();
    const matrix = useSelector(id === "1" ? selectMatrix1 : selectMatrix2);

    const handleChange = (e) => {
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
        <div className="form-matrix" id={`form-matrix-${id}`}>
            <div>
                <label htmlFor={`matrix-${id}`}>Matrix</label>
                <input id={`matrix-${id}`} name="matrix" className="feed__form-input"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor={`rows-${id}`}>Rows</label>
                <input id={`rows-${id}`} name="rows" className="feed__form-input" type="number"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor={`column-${id}`}>Columns</label>
                <input id={`column-${id}`} name="column" className="feed__form-input" type="number"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default FormMatrix;