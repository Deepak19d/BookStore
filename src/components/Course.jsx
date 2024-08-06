import React from "react";
import list from "../../public/list.json";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text=4xl">
            Discover a Universe of Books at Your{" "}
            <span className="text-blue-500">Fingertips.</span>
          </h1>
          <p className="mt-12">
            {" "}
            Our courses are like those viral cat videos – once you start, you
            can't stop! 😂 Whether you're a coding newbie or a pro looking to
            upgrade your skills, our book's got all the hacks you need.
          </p>
          <button className=" mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
            Back
          </button>
        </div>
        <div>
          {
          list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
