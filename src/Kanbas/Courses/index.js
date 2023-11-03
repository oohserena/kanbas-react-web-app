import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import CourseLocation from "./CourseLocation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/AssignmentsEditor";
import Grades from "./Grades";



function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  if (!course) {
    // Handle the case when the course is not found
    return <Navigate to="/not-found" />;
  }

  return (
    <div>
      <CourseLocation courses={courses}/>
      
      <CourseNavigation />
      
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="/Kanbas/Courses/:courseId/Assignments/Editor/:assignmentId" element={<AssignmentsEditor />} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;
