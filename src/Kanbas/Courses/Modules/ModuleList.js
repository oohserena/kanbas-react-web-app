import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );}, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");

  const handleUpdateModule = async () => {
    const updatedModule = {
      ...module,
      name: newModuleName,
      description: newModuleDescription,
    };
  
    try {
      const response = await client.updateModule(module._id, updatedModule);
  
      if (response && response.status === 200) {
        // Update the Redux store with the updated module
        dispatch(updateModule(updatedModule));
        // Clear input fields
        setNewModuleName("");
        setNewModuleDescription("");
      } else {
        console.error("Failed to update module. Unexpected response:", response);
      }
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };
  
  
  
  
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  // const deleteModuleHandler = (moduleId) => {
  //   dispatch(deleteModule(moduleId));
  // };

  const editModule = (module) => {
    dispatch(setModule(module));
    setNewModuleName(module.name);
    setNewModuleDescription(module.description);
  };

  return (
    <div>
      <hr />
      <div className="add-area-container">
        <div>
          <input
            className="input-module-name"
            type="text"
            placeholder="Module Name"
            value={newModuleName}
            onChange={(e) => setNewModuleName(e.target.value)}
          />
        </div>

        <div className="text-area-module-descrip">
          <textarea
            className="text-area"
            placeholder="Module Description"
            value={newModuleDescription}
            onChange={(e) => setNewModuleDescription(e.target.value)}
          />
        </div>

        <div className="add-module-bt-container">
          <button className="update-module-bt" onClick={handleUpdateModule}>
            Update
          </button>
          <button className="add-module-button" onClick={handleAddModule}>
            Add
          </button>
        </div>
      </div>

      <ul className="list-group module-container">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <div className="module-info">
                <div>
                  <h3>{module.name}</h3>
                  <p>{module.description}</p>
                  <p>{module._id}</p>
                </div>
                <div className="delete-bt-container">
                  <button className="edit-module-bt" onClick={() => editModule(module)}>
                    Edit
                  </button>
                  <button className="delete-bt" onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ModuleList;
