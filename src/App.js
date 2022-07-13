import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Trail from "./pages/Trail/Trail";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Trail />} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;
