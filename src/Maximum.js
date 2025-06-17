import React, { useState } from "react";
function Maximum() {

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [max, setMax] = useState((a >= b && a >= c) ? a : (b >= c) ? b : c);

    const handlechangeA = (event) => {
        setA(event.target.value);
    };

    const handlechangeB = (event) => {
        setB(event.target.value);

    }

    const handlechangeC = (event) => {
        setC(event.target.value);
    };

    return (
        <>
            <h1>First Value: {a}</h1>
            <h1>Second Value:{b}</h1>
            <h1>Third value:{c}</h1>
            <h1>Find Largest Value:{max}</h1>

            <input type="text"  value={a} onChange={handlechangeA} placeholder="Enter First Number"/>
            <input type="text" value={b} onChange={handlechangeB} placeholder="Enter second number" />
            <input type="text"  value={c} onChange={handlechangeC}  placeholder="Enter third number"/>
            <button onClick={() => setMax((a >= b && a >= c) ? a : (b >= c) ? b : c)}>Update MaxValue</button>
        </>
    );
}
export default Maximum;