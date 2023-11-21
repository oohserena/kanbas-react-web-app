import axios from "axios";


// const COURSES_URL = "http://localhost:4000/api/courses";
// const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = "https://kanbas-node-server-app-sdvg.onrender.com/api/courses";


export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};


export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};