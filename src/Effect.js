import React, { useEffect, useState } from "react";

function Effect() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        const numA = Number(a);
        const numB = Number(b);
        const numC = Number(c);
        const maxVal = Math.max(numA, numB, numC);
        setMax(maxVal);
    }, [a, b, c]);

    return (

        <div>
            <center>
                <h1>Calculation</h1>
                <h1>A:{a}</h1>
                <h1>B:{b}</h1>
                <h1>C:{c}</h1>
                <h1>Max:{max}</h1>

                <input type="text" value={a} onChange={(e) => setA(e.target.value)} />
                <input type="text" value={b} onChange={(e) => setB(e.target.value)} />
                <input type="text" value={c} onChange={(e) => setC(e.target.value)} />
            </center>


        </div>
    );
}
export default Effect;