import React from "react";
import { useSelector } from "react-redux";
import { selectMatrix1 } from "../reducers/matrix1"
import { selectMatrix2 } from "../reducers/matrix2";

import FigureMatrix from "./FigureMatrix";

import '../assets/styles/components/Matrix.css';

const Matrix = (props) => {
    const { id } = props;
    const matrix = useSelector(id === "1" ? selectMatrix1 : selectMatrix2);
    const arrayMatrix = matrix.matrix.split(" ");

    return(
        <div className="matrix">
            <strong className="matrix__name">{matrix.name.toUpperCase()}=</strong>
            <FigureMatrix matrixObj={{
                matrix: arrayMatrix,
                columns: matrix.columns
            }}
            />
        </div>
    )
}

export default Matrix;