import React from "react";
import CourseCard from "./CourseCard";
import Todo from "./ToDo/Todo";
import "./index.css";

function Dashboard(
  {
    courses, 
    newCourseTitle, 
    newCourseNumber, 
    newCourseStartDate, 
    newCourseEndDate, 
    setNewCourseTitle, 
    setNewCourseNumber, 
    setNewCourseStartDate, 
    setNewCourseEndDate, 
    setEditedCourse, 
    addNewCourse, 
    deleteCourse, 
    updateCourse
  }


) {

  return (
    <div className="row">
      <div className="col-md-8 dashboard-body">
        <CourseCard 
        courses={courses}
        setNewCourseTitle={setNewCourseTitle}
        setNewCourseNumber={setNewCourseNumber}
        setNewCourseStartDate={setNewCourseStartDate}
        setNewCourseEndDate={setNewCourseEndDate}
        setEditedCourse={setEditedCourse}
        addNewCourse={addNewCourse}
        deleteCourse={deleteCourse}
        updateCourse={updateCourse}
        newCourseTitle={newCourseTitle}
        newCourseNumber={newCourseNumber}
        newCourseStartDate={newCourseStartDate}
        newCourseEndDate={newCourseEndDate}
/>
      </div>
      <div className="col-md-2">
        <Todo />
      </div>
    </div>
  );
}

export default Dashboard;
