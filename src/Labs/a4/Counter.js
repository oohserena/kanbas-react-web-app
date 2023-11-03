import React, { useState } from "react";
import "./Style.css"

function Counter() {
    const [count, setCount] = useState(7);
    console.log(count)
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button className="button-green" onClick={() => setCount(count + 1)}>Up</button>
            <button className="button-red" onClick={() => setCount(count - 1)}>Down</button>
        </div>

    );
}
export default Counter;