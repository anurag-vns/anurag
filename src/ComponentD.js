import React, { useState } from "react";

function ComponentD() {
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
                 <input type="text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter second Number" /><br/><br/>

                 
                 <select value={list} onChange={(e)=> setList(e.target.value)} onClick={handlechange}>
                    <option value={Text}>Select </option>
                    <option value={"add"}>Add</option>
                    <option value={"sub"}>Subtract</option>
                 </select><br/><br>
                 </br>
            </center>
        </div>

    );
}
export default ComponentD;