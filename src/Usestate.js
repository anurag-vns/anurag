import React from "react";
import { useState } from "react";

function Usestate() {
    const [count, setCount] = useState(0);
    function add() {
        setCount(count + 1)
    }
    return (
        <>
            <h1> count is {count}</h1>
            <button onClick={add}>Count</button>
        </>
    )
}
export default Usestate;