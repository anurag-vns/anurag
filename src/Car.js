import React, { useState } from "react";

function Car(){
const [name, setName] = useState("Fortuner");
const [color, setColor] = useState("Blue");
const [company, setCompany] = useState("Toyata");
const [year, setYear] = useState("2025");
return(
    <>
    <h1>My Car name is:{name}</h1>
     <h1>Color is:{color} </h1>
      <h1>company name is: {company}</h1>
      <h1>Car model is {year}</h1>
     </>
);
}

export default Car;

