import React from 'react'
import { Link } from "react-router-dom";

function Instructions() {
    return (
        <div>
            <p>The first thing you have in account is the type operation: </p>
            <ul className="ml-2">
                <li>Determinant  <small>det</small></li>
                <li>Adj</li>
                <li>Inverse <small>-1</small></li>
            </ul>
            <p>This <strong>three</strong> operations you can do 
            with quadratic matrixs <strong>1x1, 2x2, 3x3 and 4x4</strong>.</p>
            <p>Is importat remember, what before operations just you can do
            with one matrix. So that I am select the matrix <strong>A</strong>.</p>
            <p>For more information click <Link to="/documentation"><strong>Here</strong>.</Link></p>

            <p>Also you can do tranposed the matrix. For this just past in the input 
            operation <strong>tranposed</strong> or just one <strong>T</strong></p>
            <p>The operations you needed passed both matrixs is:</p>
            <ul className="ml-2">
                <li>Sum <small>+</small></li>
                <li>Minus <small>-</small></li>
                <li>Multiply <small>x</small></li>
            </ul>
            <p>
                For this operations you needed know somethings
                conditions <Link to="/documentation"><strong>Information Here</strong></Link>
            </p>
            <big>Remember separate the matrix's numbers for one space</big>
        </div>
    )
}

export default Instructions
