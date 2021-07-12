import React from 'react'
import { Link } from "react-router-dom";

function Instructions() {
    return (
        <div>
            <p>La primer cosa a tener en cuenta es el tipo de operationes: </p>
            <ul className="ml-2">
                <li>Determinante</li>
                <li>Adjunta</li>
                <li>Inversa</li>
            </ul>
            <p>Estas <strong>tres</strong> operaciones se pueden hacer con matrices
                cuadraticas de <strong>1x1, 2x2 y 3x3</strong>.</p>
            <p>Es importante recordar, que las anteriores operaciones solamente se pueden realizar,
            con una matriz. Por lo que si quiere utilizarlas, se le tendra en cuenta
            la matriz <strong>A</strong>.</p>
            <p>Para más información sobre estas operaciones da
            click <Link to="/documentation"><strong>Aquí</strong>.</Link></p>

            <p>Las operaciones en las que se tienen en cuenta ambas operaciones son:</p>
            <ul className="ml-2">
                <li>Suma</li>
                <li>Resta</li>
                <li>Multiplicacion</li>
            </ul>
            <p>Tenga en cuenta que para hacer estas operaciones se deben tener en cuenta ciertas
                condiciones.</p>
            <p>Para conecerlas da click <Link to="/documentation"><strong>Aquí.</strong></Link></p>

            <p>Sí desea hacer operaciones entre constantes y matrices, estas son las operaciones permitidas:</p>
                <ul className="ml-2">
                    <li>Multiplicacion</li>
                    <li>División</li>
                </ul>
            <p>
                En la matriz <strong>A </strong>
                pase la matriz y en la matriz <strong>B</strong> solamente coloque un número en
                el input de matriz
            </p>
        </div>
    )
}

export default Instructions
