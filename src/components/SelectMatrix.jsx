import React from 'react';
import Matrix from "../components/Matrix";

import "../assets/styles/components/SelectMatrix.css";

function SelectMatrix() {
    return (
        <div className="select-matrix">
            <Matrix id="1"/>
            <Matrix id="2"/>
        </div>
    )
}

export default SelectMatrix;
