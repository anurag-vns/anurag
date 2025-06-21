import React, { useState } from "react";

function CmpA(props) {
    return (
        <div>
            <center>

                <h1>{props.children}</h1>
                <img src={props.imagesSrc}></img>
            </center>
        </div>


    );
}
export default CmpA;