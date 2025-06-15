import React, { useState } from "react";
function Maximum() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [max, setMax] = useState((a>b)? a:b);

    return (
        <>
            <h1>A: {a}</h1>
            <h1>B:{b}</h1>
            <h1>Max Value is:{max ? a : b}</h1>
           


            <button onClick={() => setA(a + 1)}>Increment</button>
            <button onClick={() => setB(b + 1)}>Dcrement</button>
            <button onClick={() => setMax(a > b)?a:b}>Update MaxValue</button>
           



        </>

    );
}
export default Maximum;