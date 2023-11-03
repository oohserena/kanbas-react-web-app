import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./index.css";
import "./AssignmentEditor.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment } from "./assignmentsReducer";
import AssignmentsEditor from "./AssignmentsEditor";

function AssignmentEditor({ setShowAssignmentEditor }) {
  
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignments.assignments);

  const [newAssignment, setNewAssignment] = useState({
    _id: `A${assignments.length + 1}`,
    title: "",
    description: "",
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: courseId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({
      ...newAssignment,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch(addAssignment(newAssignment));
    setShowAssignmentEditor(false);
  };

  const handleCancel = () => {
    setShowAssignmentEditor(false);
  };

  return (
    <div>
      <hr />
      <form>
        <div className="input">
          <label>Title:</label>
          <br />
          <input
            className="title-input"
            placeholder="New Assignment Name"
            type="text"
            name="title"
            value={newAssignment.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <label>Description:</label>
          <br />
          <textarea
            className="description-input"
            name="description"
            value={newAssignment.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <label>Due Date:</label>
          <br />
          <div className="due-date">
            <input
              type="date"
              name="dueDate"
              value={newAssignment.dueDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input">
          <label>Available From Date:</label>
          <div className="due-date">
            <input
              type="date"
              name="availableFromDate"
              value={newAssignment.availableFromDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="input">
          <label>Available Until Date:</label>
          <div className="due-date">
            <input
              type="date"
              name="availableUntilDate"
              value={newAssignment.availableUntilDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
      <div className="bt">
        <div className="save-bt-container">
          <button className="save-bt" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="cancel-bt-container">
          <button className="cancel-bt" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignments.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showAssignmentEditor, setShowAssignmentEditor] = useState(false);
  const navigateToAssignmentEditor = () => {
    setShowAssignmentEditor(true);
  };

  const handleDeleteAssignment = (assignmentId) => {
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
  };


  return (
    <div>
      {showAssignmentEditor ? (
        <AssignmentEditor setShowAssignmentEditor={setShowAssignmentEditor} />
      ) : (
        <div>
          <div className="assignment-title">
            <h3>Assignments for course {courseId}</h3>
          </div>
          <hr />

          <div className="search-bt-bar">
            <div className="search-input-area">
              <input className="search-input" type="text" placeholder="Search for Assignment" />
            </div>
            <div className="group-bt">
              <button className="group-bt-detail">+ Group</button>
            </div>
            <div className="add-assignment-bt">
              <button className="add-assignment" onClick={navigateToAssignmentEditor}>
                + Assignment
              </button>
            </div>
            <div className="dots-container">
              <button className="dots-bt">
                <BiDotsVerticalRounded />
              </button>
            </div>
          </div>

          <div className="list-group">
            {assignments.map((assignment) => (
              <div className="list-item" key={assignment._id}>
                <div className="assignment-container">
                  <div className="assignment-dots">
                    <PiDotsSixVerticalBold />
                  </div>
                  <div className="assignment-link" 
                    onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`)}>
                          {assignment.title}
                  </div>
                  <div className="delete-bt-container">
                    <button className="delete-bt" onClick={() => handleDeleteAssignment(assignment._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Assignments;
