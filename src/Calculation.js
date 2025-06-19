import React, { use, useState } from "react";
function Calculation() {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    const [data, setData] = useState(0);

    function addnumber() {
        setData(Number(num) + Number(num1));
    }
    function subnumber() {
        setData(Number(num) - Number(num1));
    }

    function multynumber() {
        setData(Number(num) * Number(num1));
    }

    function dividenumber() {
        setData(Number(num) / Number(num1));
    }
    return (
        <div>
            <center>
                <h1>calculation</h1>
                <h1>Result: {data}</h1>
                <input type="text" value={num} onChange={(e) => setNum(e.target.value)} placeholder="First Number" />
                <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Second Number" />
                <button onClick={addnumber} >Addition</button>
                <button onClick={subnumber}>Subtraction</button>
                <button onClick={multynumber}>Multiply</button>
                <button onClick={dividenumber}>Divide</button>
            </center>
        </div>
    );

}
export default Calculation;