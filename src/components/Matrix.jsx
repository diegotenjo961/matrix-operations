import React from "react";
// import styled from 'styled-components';
import { useSelector } from "react-redux";
import { selectMatrix1 } from "../reducers/matrix1"
import { selectMatrix2 } from "../reducers/matrix2"

const Matrix = (props) => {
    const { id } = props;
    const matrix = useSelector(id === "1" ? selectMatrix1 : selectMatrix2);
    console.log(matrix)

    return(
        // <Container>
        //         nose
        // </Container>
        <div>nose</div>
    )
}

export default Matrix;