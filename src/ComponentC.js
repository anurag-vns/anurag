import React, { useState } from "react";

function ComponentC() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [list, setList] = useState('add');
    const [result, setResult] = useState('0');

    function handlechange(){
        if(list==='add'){
            setResult(Number(a)+Number(b));
        }
        else if(list==='sub'){
          setResult(Number(a)-Number(b));
        }
    }

    return (
        <div>
            <center>
                <h1>Calculation: {result}</h1>
                <input type="text" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter Frist Number" />
                 <input type="text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter second Number" />
                 
                 <select value={list} onChange={(e)=> setList(e.target.value)}>
                    <option value={"add"}>Add</option>
                    <option value={"sub"}>Subtract</option>
                 </select><br/><br>
                 </br>

                 <button onClick={handlechange}>Calculation</button>
            </center>
        </div>

    );
}
export default ComponentC;