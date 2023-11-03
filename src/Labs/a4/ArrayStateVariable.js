import React, { useState } from "react";
import "./Style.css";


function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h3>Array State Variable</h3>
      <button className="button-green-arr" onClick={addElement}>Add Element</button>
      <br />
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button className="button-red-arr" onClick={() => deleteElement(index)}>
              Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ArrayStateVariable;