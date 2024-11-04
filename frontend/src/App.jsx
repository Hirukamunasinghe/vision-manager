import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home"; // import Home component

const App = () => {
  return (
    <Router>
     
        <div >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
          </Routes>
        </div>
      
    </Router>
  );
};

export default App;
