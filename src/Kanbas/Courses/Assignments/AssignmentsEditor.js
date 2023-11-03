// AssignmentsEditor.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAssignment, updateAssignment } from "./assignmentsReducer";

function AssignmentsEditor() {
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignments.selectedAssignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedTitle, setEditedTitle] = useState(assignment.title);

  const handleSave = () => {
    // Update the assignment title using the action from the reducer
    const updatedAssignment = { ...assignment, title: editedTitle };
    dispatch(updateAssignment(updatedAssignment));
    // Navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    // Reset the selected assignment in Redux
    dispatch(selectAssignment(null));
    // Navigate back to the Assignments screen
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div>
      <h3>Edit Assignment</h3>
      <input
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="form-control mb-2"
      />
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
