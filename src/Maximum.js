import React, { useState } from "react";
function Maximum() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [min, setMin] = useState((a<b)? a:b);

    return (
        <>
            <h1>A: {a}</h1>
            <h1>B:{b}</h1>
            <h1>Min Value is:{min ? a : b}</h1>
           


            <button onClick={() => setA(a + 1)}>First Value</button>
            <button onClick={() => setB(b + 1)}>Second Valuse</button>
            
            <button onClick={() => setMin(a < b)? a:b}>Update MaxValue</button>
            </>
  );
}
export default Maximum;