import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        
          <Route exact path="/login" element={<Login />} />
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;