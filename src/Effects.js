import React, { useEffect, useState } from "react";

function Effects() {
    const [count, setCount] = useState(0);
    const [cal, setCal] = useState(0);

    useEffect(() => {
        setCal(() => count * 2);

    }, [count]);


    return (
        <div>
            <h1>Example of Useeffect</h1>
            <h1>Count :{count}  </h1>
            <h1>Calculation: {cal}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>

    );
}
export default Effects;