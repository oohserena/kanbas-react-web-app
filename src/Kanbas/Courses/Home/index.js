import ModuleList from "../Modules/ModuleList";
import Status from "../Status/index.js";


function Home() {
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
export default Home;