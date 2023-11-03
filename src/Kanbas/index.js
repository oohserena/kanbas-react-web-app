import { Route, Routes, Navigate, Switch } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import React, { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
// import { add } from "../Labs/a4/ReduxExamples/AddRedux/addReducer";

function Kanbas() {
  const initialCourses = db.courses;
  const [courses, setCourses] = useState(initialCourses);
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseNumber, setNewCourseNumber] = useState("");
  const [newCourseStartDate, setNewCourseStartDate] = useState("");
  const [newCourseEndDate, setNewCourseEndDate] = useState("");

  const [editedCourse, setEditedCourse] = useState(null);


  const addNewCourse = () => {
    if (newCourseTitle && newCourseNumber && newCourseStartDate && newCourseEndDate) {
        const newCourse = {
            _id: Date.now(),
            name: newCourseTitle,
            startDate: newCourseStartDate,
            endDate: newCourseEndDate,
        };
    
    setCourses([...courses, newCourse]);
    setNewCourseTitle("");
    setNewCourseNumber("");
    setNewCourseStartDate("");
    setNewCourseEndDate("");

    }
  };

  const updateCourse = () => {
    if (editedCourse) {
      const updatedCourses = courses.map((course) => {
        if (course._id === editedCourse._id) {
          return {
            ...course,
            name: newCourseTitle,
            number: newCourseNumber,
            startDate: newCourseStartDate,
            endDate: newCourseEndDate,
          };
        }
        return course;
      });

      setCourses(updatedCourses);
      setEditedCourse(null); // Clear the edited course
      setNewCourseTitle("");
      setNewCourseNumber("");
      setNewCourseStartDate("");
      setNewCourseEndDate("");
    }
  };

  const deleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const updatedCourses = courses.filter((course) => course._id !== id);
      setCourses(updatedCourses);
    }
  };

  const clearNewCourseInputs = () => {
    setNewCourseTitle("");
    setNewCourseNumber("");
    setNewCourseStartDate("");
    setNewCourseEndDate("");
  };

  

  return (
    <Provider store={store}>
      <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<Account />} />
          <Route path="Dashboard" element={
            <Dashboard 
              courses={courses}
              newCourseTitle={newCourseTitle}
              newCourseNumber={newCourseNumber}
              newCourseStartDate={newCourseStartDate}
              newCourseEndDate={newCourseEndDate}
              setCourses = {setCourses}
              setNewCourseTitle = {setNewCourseTitle}
              setNewCourseNumber = {setNewCourseNumber}
              setNewCourseStartDate = {setNewCourseStartDate}
              setNewCourseEndDate = {setNewCourseEndDate}
              setEditedCourse = {setEditedCourse}
              addNewCourse = {addNewCourse}
              deleteCourse = {deleteCourse}
              updateCourse={ updateCourse }
            />} />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="Calendar" element={<h1>Calendar</h1>} />
        </Routes>
      </div>
    </div>

    </Provider>
    
  );
}
export default Kanbas;
