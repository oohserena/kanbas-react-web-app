import EncodeingParametersInURLs from "./EncodingParametersInURLs.js";
import WorkingWithObject from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWirhArrays.js";

function Assignment5() {
    
    return (
        

      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${process.env.REACT_APP_API_BASE}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <h3>SimpleAPIExamples</h3>
        <EncodeingParametersInURLs />
        <WorkingWithObject />
        <WorkingWithArrays />
      </div>
    );
  }
  export default Assignment5;