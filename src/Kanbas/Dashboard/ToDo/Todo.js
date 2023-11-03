import React from "react";
import "../index.css";
import { CiCircleRemove } from "react-icons/ci"

function Todo() {
    return(
        <div className="to-do-container">
            <div className="title-divider">
                <h4 className="to-do-title">To Do</h4>
                <hr className="divider" /> 
            </div>
            
            <div>
                <button className="to-do-button">Grade A1 - ENV + HTML <CiCircleRemove className="icon-gray"/></button><br />
                <button className="to-do-button">Grade A2 - CSS + BOOTSTRAP <CiCircleRemove className="icon-gray"/></button><br />
                <button className="to-do-button">Grade A3 - JS + REACT <CiCircleRemove className="icon-gray"/></button><br />
                <button className="to-do-button">Grade A4 - STATE + REDUX <CiCircleRemove className="icon-gray"/></button><br />
            </div>

        </div>
        

    )
}

export default Todo;