import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../../Database";
import { BsList } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import "./index.css";

function CourseLocation() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);

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
    </div>

    );
}

export default CourseLocation;