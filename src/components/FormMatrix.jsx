import React, { useState } from 'react';

const FormMatrix = (props) => {
    const { id } = props;
    const [formData, setFormData] = useState({
        matrix: "",
        rows: 0,
        column: 0,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    sessionStorage.setItem(`matrix-${id}`, JSON.stringify(formData));

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