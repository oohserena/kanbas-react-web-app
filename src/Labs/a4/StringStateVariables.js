import React, { useState } from "react";

function StringStateVariable() {
    const [firstName, setFirstName] = useState("John");
    return (
        <div>
            <h3>String State Variable</h3>
            <p>{firstName}</p>
            <input 
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}/>
        </div>
    );

}

export default StringStateVariable;