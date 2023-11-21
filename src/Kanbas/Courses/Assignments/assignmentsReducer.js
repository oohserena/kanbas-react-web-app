// src/Kanbas/Courses/Assignments/assignmentsReducer.js
import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: {
    assignments: db.assignments,
    selectedAssignment: null,
  },
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    selectAssignment: (state, action) => {
      state.selectedAssignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
  setAssignments
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
