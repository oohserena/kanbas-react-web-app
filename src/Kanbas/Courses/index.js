import React, { useState, useEffect } from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import CourseLocation from "./CourseLocation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/AssignmentsEditor";
import Grades from "./Grades";

function Courses({ courses }) {
  const { courseId } = useParams();

  const URL = `http://localhost:4000/api/courses/${courseId}`;
  console.log("Course ID:", courseId);
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const findCourseById = async () => {
    try {
      const response = await axios.get(URL);
      setCourse(response.data);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    findCourseById();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <CourseLocation courses={courses} />
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
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="/Kanbas/Courses/:courseId/Assignments/Editor/:assignmentId"
              element={<AssignmentsEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
