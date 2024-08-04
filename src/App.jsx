import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
