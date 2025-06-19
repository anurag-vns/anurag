import React, { use, useState } from "react";

function ComponentA() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState('');

    function addnumber() {
        setResult(Number(a) + Number(b));
    }

    function subnumber() {
        setResult(Number(a) - Number(b));
    }


    return (
        <div>
            <center>
                <h1>Calculation:{result}</h1>
                <input type="text" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter First Number" />
                <input type=" text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter Second Number" />
                <button onClick={addnumber}>Addition</button>
                <button onClick={subnumber}>Subtraction</button>
            </center>

        </div>
    );
}
export default ComponentA;