import React, { useState } from "react";
function Maximum() {

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [d, setD] = useState('');
    const [max, setMax] = useState((a >= b && a >= c && a>=d) ? a : (b >= c && b>=d)? b: (c>=d)?c:d);

    
    const handlechangeA = (event) => {
        setA(event.target.value);
    };

    const handlechangeB = (event) => {
        setB(event.target.value);

    }

    const handlechangeC = (event) => {
        setC(event.target.value);
    };

    const handlechangeD=(event)=>{
setD(event.target.value);
    };

    return (
        <>
            <h1>First Value: {a}</h1>
            <h1>Second Value:{b}</h1>
            <h1>Third value:{c}</h1>
            <h1>Fourth value:{d}</h1>
            <h1>Find Largest Value:{max}</h1>

            <input type="text"  value={a} onChange={handlechangeA} placeholder="Enter First Number"/>
            <input type="text" value={b} onChange={handlechangeB} placeholder="Enter second number" />
            <input type="text"  value={c} onChange={handlechangeC}  placeholder="Enter third number"/>
            <input type="text" value={d} onChange={handlechangeD} placeholder="Enter Fourth number"/>
            <button onClick={() => setMax((a >= b && a >= c && a>=d) ? a : (b >= c && b>=d) ? b :(c>=d)?c:d)}>Update MaxValue</button>
        </>
    );
}
export default Maximum;