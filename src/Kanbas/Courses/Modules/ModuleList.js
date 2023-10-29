import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./ModuleList.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div className="button-container">
        <button className="gray-button">Collapse All</button>
        <button className="gray-button">View Progress</button>
        <button className="gray-button">PublishAll</button>
        <button className="red-button">   + Module   </button>
      </div>
    
    <ul className="list-group">
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      }
    </ul>

    </div>
    
  );
}
export default ModuleList;