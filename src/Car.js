import React, { useState } from "react";

function Car(){
const [taxi, setTaxi] = useState({Name:"Safari",Color: "White", Company:"Tata", Model :"2025"});
return(
    <><h1>My Car name is:{taxi.Name}</h1>
     <h1>Color is:{taxi.Colorcolor} </h1>
      <h1>company name is: {taxi.Company}</h1>
      <h1>Car's model {taxi.Model}</h1>
     </>
);
}

export default Car;

