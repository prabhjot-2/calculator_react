import React from "react";
import {add, sub, mult, div} from "./Calc";

function App(){
    return (
        <>
            <ul>
                <li> {add(30,4)} </li>
                <li> {sub(30,4)} </li>
                <li> {mult(30,4)} </li>
                <li> {div(30,4)} </li>
            </ul>
        </>
    );
}
export default App;
