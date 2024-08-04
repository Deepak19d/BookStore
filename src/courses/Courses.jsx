import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Course from "../components/Course";
import list from "../../public/list.json";

export default function Courses() {
  console.log(list);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}
