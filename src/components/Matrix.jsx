import React from "react";
import { useSelector } from "react-redux";
import { selectMatrix1 } from "../reducers/matrix1"
import { selectMatrix2 } from "../reducers/matrix2";

import '../assets/styles/components/Matrix.css';

const Matrix = (props) => {
    const { id } = props;
    const matrix = useSelector(id === "1" ? selectMatrix1 : selectMatrix2);
    const arrayMatrix = matrix.matrix.split(" ");
    console.log(matrix);

    return(
        <div className="matrix">
            <strong className="matrix__name">{matrix.name.toUpperCase()}=</strong>
            <div className="matrix__grid"
                style={{gridTemplateColumns: `repeat(${matrix.columns}, minmax(0, 1fr))`}}>
                {arrayMatrix.map((el, n) => (
                    <span key={n}
                        className="matrix__grid-el">{el}</span>
                ))}
            </div>
        </div>
    )
}

export default Matrix;