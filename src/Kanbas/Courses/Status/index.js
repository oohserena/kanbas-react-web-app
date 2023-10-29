import React from "react";
import "./index.css";
import { BsFileArrowUp } from "react-icons/bs";
import { AiOutlineImport } from "react-icons/ai";
import { PiTargetLight } from "react-icons/pi";
import { BsFillBarChartFill } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci"

function Status() {
    return (
        <div>
            <button className="gray-button"><BsFileArrowUp /> Import Existing Content</button><br />
            <button className="gray-button"><AiOutlineImport /> Import from Commons</button><br />
            <button className="gray-button"><PiTargetLight /> Choose Home Page</button><br />
            <button className="gray-button"><BsFillBarChartFill /> View Course Stream</button><br />
            <button className="gray-button"><GrAnnounce /> New Announcement</button><br />
            <button className="gray-button"><BsFillBarChartFill /> New Analytics</button><br />
            <button className="gray-button"><IoIosNotificationsOutline /> View Course Notifications</button><br />
            <br />

            <h4 className="to-do-title">To Do</h4>
            <hr className="divider"/> 
            <div>
                <button className="to-do-button">Grade A1 - ENV + HTML <CiCircleRemove className="icon-gray"/></button><br />
                <button className="to-do-button">Grade A2 - Css + BOOTSTRAP <CiCircleRemove className="icon-gray"/></button><br />
            </div>

        </div>

       
        
        

    );
}

export default Status;