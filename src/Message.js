import React from "react";

function Message(props){
    return(
        <h1>Hello{props.name} my age is:{props.age}</h1>
    );
}
export default Message;