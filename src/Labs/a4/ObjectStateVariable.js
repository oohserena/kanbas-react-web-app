import React, { useState } from "react";

function ObjectStateVariable() {
    const[person, setPerson] = useState({name:"Serena", age:28});
    return (
        <div>
            <h3>Object State Varaibles</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input
                value={person.name}
                onChange={(e) => setPerson({...person, name: e.target.value})}
            />
            <input
                value={person.age}
                onChange={(e) => setPerson({...person, age: parseInt(e.target.value)})}
            />

        </div>
    );
}

export default ObjectStateVariable;