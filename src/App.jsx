import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses";
function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses />}/>
      </Routes>
    </>
  );
}

export default App;
