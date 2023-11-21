import axios from "axios";


const COURSES_URL = "http://localhost:4000/api/courses";

// const MODULES_URL = "http://localhost:4000/api/modules";

// const MODULES_URL = "https://kanbas-node-server-app-sdvg.onrender.com/api/modules";

// const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${process.env.REACT_APP_API_BASE}/modules`;

export const updateModule = async (moduleId, updatedModule) => {
    try {
      const response = await axios.put(`${MODULES_URL}/${moduleId}`, updatedModule);
      return response;
    } catch (error) {
      // Log the error for debugging purposes
      console.error("Error updating module:", error);
      return error.response; // Return the response from the error for further analysis
    }
  };
  
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};


export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
};
  
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
