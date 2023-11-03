import ModuleList from "./ModuleList";
import Status from "../Status/index.js";
import "./ModuleList.css";

function Modules() {
  return (
    <div className="row">
        <div className="col-md-8">
            <ModuleList />
        </div>
        <div className="col-md-4">
            <Status />
        </div>
    </div>
  );
}
export default Modules;