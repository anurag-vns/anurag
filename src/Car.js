import React, { useState } from "react";

function Car(){
const [taxi, setTaxi] = useState({Name:"Safari",Color: "White", Company:"Tata", Model :"2025"});

/*const UpdateColor=()=>{
    setTaxi(previousState=>{
        return{...previousState,Color:"black"}
    });

    const updateColor = (newColor) => {
    setTaxi({ ...taxi, color: newColor });
  }*/

    /*function updateColor()
    {
        setTaxi(taxi)
    }*/
   const updateColor= () =>{
    setTaxi({...taxi, Color:"Blue"});
   }

return(
    <><h1>My Car name is:{taxi.Name}</h1>
     <h1>Color is:{taxi.Color} </h1>
      <h1>company name is: {taxi.Company}</h1>
      <h1>Car's model {taxi.Model}</h1>
     <button type="button" onClick={updateColor}>Update Color</button>
     </>
);
}

export default Car;

