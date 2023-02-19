import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { projects } from "../utils/constants";

const Projects = () => {

  const { setActiveFilter } = useContext(AppContext)

  useEffect(() => {
    setActiveFilter('Projects')
  }, [])
  

  return (
    <>
      <section className="z-5 flex w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12 ">
        <div className=" flex h-full w-full flex-col items-center justify-center gap-5">
          <h3 className="animate__animated animate__fadeInDown pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            Projects
          </h3>
          {projects.map((item) => {
            return (
              <div
                key={item.title}
                className="animate__animated animate__fadeIn animate__delay-1s flex w-full max-w-4xl items-start justify-start gap-6 rounded-xl border-blue bg-gray-300 py-10 px-10 odd:border-r-4 even:border-l-4"
              >

                <div className="flex items-center justify-center bg-wht h-full w-full flex-1">
                  {/* <h4 className="h-full w-full bg-wht p-20 font-poppins text-lg font-semibold text-slate-700 "></h4> */}
                </div>

                <div className="flex flex-1 flex-col items-start justify-center">
                  <h4 className="font-poppins text-lg font-semibold text-slate-700">
                    {item.title}{" "}
                  </h4>
                  <span className="font-poppins text-xs text-blue py-2 font-medium ">{item.date}</span>
                  <h4 className="font-poppins text-sm font-medium text-slate-700">
                    {item.description}{" "}
                  </h4>
                  <div className="flex w-full flex-wrap items-center justify-start gap-2 pt-5 ">
                    {item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="font-poppins text-sm font-semibold bg-blue hover:bg-orange-600 transition-all duration-300 cursor-pointer text-wht px-1.5 py-0.5 rounded"
                      >
                        {" "}
                        {tech}{" "}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
