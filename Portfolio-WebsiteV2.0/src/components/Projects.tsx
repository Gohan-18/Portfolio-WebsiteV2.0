import React from "react";
import { projects } from "../utils/constants";

const Projects = () => {
  return (
    <>
      <section className="z-5 flex w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12 ">
        <div className=" flex h-full w-full flex-col items-center justify-center gap-5">
          <h3 className="animate__animated animate__fadeInDown pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            Projects
          </h3>
            {projects.map((item) => {
              return (
                <div key={item.title} className="animate__animated animate__fadeIn animate__delay-1s odd:justify-end py-10 px-10  flex items-center justify-start w-full max-w-4xl rounded-xl bg-gray-300">
                <h4>{item.title} </h4>
                </div>
              )
            })}
        </div>
      </section>
    </>
  );
};

export default Projects;
