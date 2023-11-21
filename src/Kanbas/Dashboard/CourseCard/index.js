import db from "../../Database";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../index.css";

function CourseCard({
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
  editedCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  updateState,
}) {
  const numberOfCourses = courses.length;

  return (
    <div>
      <div className="title-divider">
        <div className="dashboard-title">Dashboard</div>
        <hr className="divider" />
        <h3 className="published-course">Published Courses ({numberOfCourses})</h3>
      </div>

      <div className="add-new-course">
       
            <input
            className="new-course-inputArea"
            type="text"
            value={newCourseTitle}
            placeholder="New Course"
            onChange={(e) => setNewCourseTitle(e.target.value)}
          />
  
          <input
            className="new-course-inputArea"
            type="text"
            value={newCourseNumber}
            placeholder="Course Number"
            onChange={(e) => setNewCourseNumber(e.target.value)}
          />
          <input
            className="new-course-inputArea"
            type="date"
            value={newCourseStartDate}
            placeholder="Start Date"
            onChange={(e) => setNewCourseStartDate(e.target.value)}
          />
          <input
            className="new-course-inputArea"
            type="date"
            value={newCourseEndDate}
            placeholder="End Date"
            onChange={(e) => setNewCourseEndDate(e.target.value)}
          />

          <button className="add-course-bt" onClick={addNewCourse}>
            Add
          </button>
   
            <button className="update-course-bt" onClick={() => updateCourse({...editedCourse, name: newCourseTitle})}>
                Update
            </button>
      

       
          
        
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 card-container">
        {courses.map((course, index) => (
          <div className="card h-100" key={course._id}>
            <img src="/kanbas/images/background.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>

              <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                {course.name}
              </Link>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>

              <button
                className="edit-course-bt"
                onClick={() => {
                  updateState(course);
                  setEditedCourse(course);
                  setNewCourseTitle(course.name);
                  setNewCourseNumber(course.number); // Make sure these props are defined in Courses
                  setNewCourseStartDate(course.startDate);
                  setNewCourseEndDate(course.endDate);
                  console.log(course, editedCourse);
                }}

              >
                Edit
              </button>

              <button className="delete-course-bt" onClick={() => deleteCourse(course)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
