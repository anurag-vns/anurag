import React, { useEffect } from "react";

function Effect(){
    useEffect(()=>{
        console.log("hello effect");
    },[]);
    return<h1>hello</h1>
}
export default Effect;