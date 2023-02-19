import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "../App";
import { projects } from "../utils/constants";

const Projects = () => {
  const { setActiveFilter } = useContext(AppContext);

  useEffect(() => {
    setActiveFilter("Projects");
  }, []);

  return (
    <>
      <section className="z-5 flex w-full flex-col items-center justify-center bg-wht px-4 pt-24 pb-12 sm:px-10 md:px-14 ">
        <div className=" flex h-full w-full flex-col items-center justify-center gap-5">
          <h3 className="animate__animated animate__fadeInDown pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            Projects
          </h3>
          {projects.map((item) => {
            return (
              <div
                key={item.title}
                className="animate__animated animate__fadeIn animate__delay-1s flex w-full max-w-4xl flex-wrap items-start justify-start gap-6  border-blue bg-gray-300 py-6 px-4 odd:border-r-4 even:flex-row-reverse even:border-l-4 sm:rounded-xl sm:px-10 sm:py-10"
              >
                <div className="flex h-full w-full items-center justify-center bg-wht lg:w-3/6">
                  {/* <h4 className="h-full w-full bg-wht p-20 font-poppins text-lg font-semibold text-slate-700 "></h4> */}
                  <ReactPlayer url={item.youtubeLink} controls />
                </div>

                <div className="flex flex-1 flex-col items-start justify-center gap-1 ">
                  <h4 className="font-poppins text-base font-semibold text-slate-700 sm:text-lg">
                    {item.title}{" "}
                  </h4>
                  <span className=" pb-1 font-poppins text-xs font-medium text-blue">
                    {item.date}
                  </span>
                  <h4 className="font-poppins text-xs font-medium text-slate-700 sm:text-sm">
                    {item.description}{" "}
                  </h4>
                  <div className="flex w-full flex-wrap items-center justify-start gap-2 pt-5 ">
                    {item.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="cursor-pointer rounded-sm bg-blue px-1.5 py-0.5 font-poppins text-xs font-medium text-wht transition-all duration-300 hover:bg-orange-600 sm:rounded sm:text-sm sm:font-semibold"
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
