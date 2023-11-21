// AssignmentsEditor.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAssignment, updateAssignment } from "./assignmentsReducer";

function AssignmentsEditor() {
  const { courseId } = useParams();
  const assignmentId = useParams().assignmentId;
  const assignments = useSelector((state) => state.assignments.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the assignment corresponding to assignmentId
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);

  const [editedAssignment, setEditedAssignment] = useState({ ...assignment });

  const handleSave = () => {
    // Update the assignment using the action from the reducer
    dispatch(updateAssignment(editedAssignment));
    // Navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    // Reset the selected assignment in Redux
    dispatch(selectAssignment(null));
    // Navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAssignment({
      ...editedAssignment,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Edit Assignment</h3>
      <div>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={editedAssignment.title}
          onChange={handleInputChange}
          className="form-control mb-2"
        />
      </div>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
      <button onClick={handleCancel} className="btn btn-danger">
        Cancel
      </button>
    </div>
  );
}

export default AssignmentsEditor;
