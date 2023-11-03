import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../../Database";
import { BsList } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import "./index.css";
import { BiGlassesAlt } from "react-icons/bi"

function CourseLocation({courses}) {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses_screen, id, screen] = pathname.split("/");
    const course = courses.find((course) => course._id === courseId);

    return(

    <div className="course-location">
        <div className="icon1">
            <BsList />
        </div>

        <div className="text1">
            {course.name}
        </div>

        <div className="icon2">
            <AiOutlineRight />
        </div>

        <div className="text2">
            {screen}
        </div>

        <div className="student-view-bt">
            <button className="student-view">
                <BiGlassesAlt className="student-view-ic" />
                Student View
            </button>
        </div>

    

  
    </div>

    );
}

export default CourseLocation;