import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ModuleList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");

  const handleAddModule = () => {
    if (newModuleName.trim() === "" || newModuleDescription.trim() === "") {
      return;
    }

    if (module._id !== null) {
      // If a module is being edited, update it
      dispatch(
        updateModule({
          _id: module._id,
          course: courseId,
          name: newModuleName,
          description: newModuleDescription,
        })
      );
      dispatch(setModule({ _id: null, name: "", description: "" }));
    } else {
      // Otherwise, add a new module
      dispatch(
        addModule({
          course: courseId,
          name: newModuleName,
          description: newModuleDescription,
        })
      );
    }

    setNewModuleName("");
    setNewModuleDescription("");
  };

  const deleteModuleHandler = (moduleId) => {
    dispatch(deleteModule(moduleId));
  };

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
          <button className="update-module-bt" onClick={handleAddModule}>
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
                  <button className="delete-bt" onClick={() => deleteModuleHandler(module._id)}>
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
