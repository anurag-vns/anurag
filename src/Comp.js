import React, { useState } from "react";

 function Comp(){
    const [add, setAdd]=useState(0);

    function addnumber(){
        setAdd(add+1);
    }

    function subnumber(){
        setAdd(add-1);
    }

    function multynumber(){
        setAdd(add*2);
    }

    function dividenumber(){
        setAdd(add/2);
    }

    return(
        <>
        <h1>Count is Here:</h1>
        <h1>Number is: {add}</h1>
        <button onClick={addnumber}>Addition</button>
        <button onClick={subnumber}>Subtraction</button>
        <button onClick={multynumber}>Multiply</button>
        <button onClick={dividenumber}>Division</button>
        </>
    )
 }
 export default Comp;