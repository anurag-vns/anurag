import react, { useState } from "react";
function Maxmin() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [max, setMax] = useState((a >= b && a >= c) ? a : (b >= c) ? b : c);
    const [min, setMin] = useState((a <= b && a <= c) ? a : (b <= c) ? b : c);
    const handlechangeA = (event) => {
        setA(event.target.value);
    };
    const handlechangeB = (event) => {
        setB(event.target.value);
    };
    const handlechangeC = (event) => {
        setC(event.target.value);
    };
    return (
        <> <h1>First:{a}</h1>
            <h1>Second:{b}</h1>
            <h1>Third:{c}</h1>
            <h1>Max Value:{max}</h1>
            <h1>Min Value:{min}</h1>
            <input type="text" value={a} onChange={handlechangeA} placeholder="enter first number" />
            <input type="text" value={b} onChange={handlechangeB} placeholder="enter second number" />
            <input type="text" value={c} onChange={handlechangeC} placeholder="enter third number" />
            F<button onClick={() => setMax((a >= b && a >= c) ? a : (b >= c) ? b : c)}>Update Max Value</button>
            <button onClick={() => setMin((a <= b && a <= c) ? a : (b <= c) ? b : c)}>Update Min Value</button>

        </>
    );
}
export default Maxmin;