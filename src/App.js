// import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
   
  );
}

export default App;
