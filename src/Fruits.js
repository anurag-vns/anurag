import React, { useState } from "react";

function Fruits(){

const [furit,setFurit]= useState("orange");

function apple()
{
    setFurit("Apple");
}

function banana()
{
    setFurit("Banana");
}

    return(
        <>
        <h1>My Fruits is: {furit}</h1>
        <button onClick={apple}>Apple</button><br/>
         <button onClick={banana}>banana</button>
</>
    );
}
export default Fruits;