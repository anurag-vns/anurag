import React, { use, useState } from "react";

function ComponentB() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [checked, setChecked] = useState('add');
    const [result, setResult] = useState('0');

    function handlechecked(e) {
        setChecked(e.target.value);
    }

    function handlechange() {
        if (checked === 'add') {
            setResult(Number(a) + Number(b));
        }
        else if (checked === 'sub') {
            setResult(Number(a) - Number(b));
        }

    }

    return (
        <div>
            <center>
                <h1>Calculation:{result}</h1>
                <input type="text" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter First Number" />
                <input type=" text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter Second Number" /><br />
                <label>Addition
                    <input type="radio" name="result" value="add" checked={checked === 'add'} onChange={handlechecked} />
                </label><br />
                <label>Subtract
                    <input type="radio" name="result" value="sub" checked={checked === 'sub'} onChange={handlechecked} />
                </label><br />
                <button onClick={handlechange}>Calculate</button>


            </center>

        </div>
    );
}
export default ComponentB;