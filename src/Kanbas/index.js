import { Route, Routes, Navigate, Switch } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import React, { useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
// import { add } from "../Labs/a4/ReduxExamples/AddRedux/addReducer";

function Kanbas() {
  const initialCourses = db.courses;
  const [courses, setCourses] = useState(initialCourses);

  // const URL = "http://localhost:4000/api/courses";
  // const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = "https://kanbas-node-server-app-sdvg.onrender.com/api/courses";
  
  const deleteCourse = async (course) => {
    if (!course || !course._id) {
      console.error("Invalid course object or missing _id");
      return;
    }
  
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) {
      return;
    }
  
    try {
      console.log(`Deleting course with id: ${course._id}`);
      await axios.delete(`${URL}/${course._id}`);
      console.log("Course deleted successfully");
      setCourses((prevCourses) => prevCourses.filter((c) => c._id !== course._id));
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error deleting course:", error);
    }
  };
  
  


  const addNewCourse = async () => {
    const response = await axios.post(URL, {
      name: newCourseTitle,
      number: newCourseNumber,
      startDate: newCourseStartDate,
      endDate: newCourseEndDate,
    });
    setCourses([
      response.data,
      ...courses,
    ])
  }
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
    console.log("123");
  };
  useEffect(() => {
    findAllCourses();
  }, [])
  const [newCourseTitle, setNewCourseTitle] = useState("");
  const [newCourseNumber, setNewCourseNumber] = useState("");
  const [newCourseStartDate, setNewCourseStartDate] = useState("");
  const [newCourseEndDate, setNewCourseEndDate] = useState("");

  const [editedCourse, setEditedCourse] = useState(null);


  // const addNewCourse = () => {
  //   if (newCourseTitle && newCourseNumber && newCourseStartDate && newCourseEndDate) {
  //       const newCourse = {
  //           _id: Date.now(),
  //           name: newCourseTitle,
  //           startDate: newCourseStartDate,
  //           endDate: newCourseEndDate,
  //       };
    
  //   setCourses([...courses, newCourse]);
  //   setNewCourseTitle("");
  //   setNewCourseNumber("");
  //   setNewCourseStartDate("");
  //   setNewCourseEndDate("");

  //   }
  // };
  const updateCourse = async (course) => {
    console.log("Updating course with data:", course);
    try {
      // Create a shallow copy of the course object
      const response = await axios.put(
        `${URL}/${course._id}`,
        course
      );
      
      // const response_2 = await axios.get(URL);
      
      // console.log("234", response_2);


      // console.log(response.config.data);
      // setCourses(
      //   courses.map((c) => {
      //     if (c._id === course._id) {
      //       return course;
      //     }
      //     return c;
      //   })
      // );
      
      findAllCourses();
  
      // Clear the edited course and new course inputs
      // setEditedCourse(null);
      // setNewCourseTitle("");
      // setNewCourseNumber("");
      // setNewCourseStartDate("");
      // setNewCourseEndDate("");
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error updating course:", error);
    }
  };

  const updateState = async (course) => {
    setEditedCourse(course);

  }
  
  

  
  
  
  
  
  
  
  

  // const deleteCourse = (id) => {
  //   if (window.confirm("Are you sure you want to delete this course?")) {
  //     const updatedCourses = courses.filter((course) => course._id !== id);
  //     setCourses(updatedCourses);
  //   }
  // };

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
              editedCourse = {editedCourse}
              addNewCourse = {addNewCourse}
              deleteCourse = {deleteCourse}
              updateCourse={ updateCourse }
              updateState={ updateState }
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
