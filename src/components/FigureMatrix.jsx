import React from "react";

import '../assets/styles/components/Matrix.css';

const FigureMatrix = (props) => {
    const { matrix, columns } = props.matrixObj;
    return(
        <div className="matrix__grid"
                style={{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}}>
                {matrix.map((el, n) => (
                    <span key={n}
                        className="matrix__grid-el">{el}</span>
                ))}
            </div>
    )
}

export default FigureMatrix;