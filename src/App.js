// import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="container">
    //   <h1>Labs</h1>
    //   <div className="nav nav-pills">
    //     <Link to="Labs/a3" className="nav nav-link">
    //       Assignment3
    //     </Link> 
    //   </div>
    //   <h1>Kanbas</h1>
    //   <Link to="/Kanbas/*"></Link>
    
      <HashRouter>
        <div>
          {/* <h1>React Labs</h1>
          <Link to="/Labs">Labs</Link>
          <br />
          <Link to="/Kanbas">Kanbas</Link> */}
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    // </div>
  );
}

export default App;
