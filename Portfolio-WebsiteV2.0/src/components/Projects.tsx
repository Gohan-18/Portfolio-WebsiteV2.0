import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { AppContext } from "../App";
import { miniProjects, projects } from "../utils/constants";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink  } from "react-icons/ai";

const Projects = () => {
  const { setActiveFilter } = useContext(AppContext);

  useEffect(() => {
    setActiveFilter("Projects");
  }, []);

  return (
    <>
      <section className="z-5 padding-top flex w-full flex-col items-center justify-center bg-dark-blue px-4 pb-12 transition-all duration-500 sm:px-10 md:px-14 ">
        <div className=" flex h-full w-full flex-col items-center justify-center gap-5">
          <h3 className="animate__animated animate__fadeInDown pt-2 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht sm:text-3xl">
            {`< Projects />`}
          </h3>
          {projects.map((item) => {
            return (
              <div
                key={item.title}
                className="animate__animated animate__fadeIn animate__delay-1s flex w-full max-w-4xl flex-wrap items-start justify-start gap-6 rounded border-orange-400 bg-wht py-6 px-4 transition-all duration-500 odd:border-r-4 even:border-l-4 md:odd:border-r-8 even:flex-row-reverse md:even:border-l-8 md:rounded-lg md:bg-gray-200 md:px-10 md:py-10"
              >
                <div className="flex h-full w-full items-center justify-center bg-wht lg:w-3/6">
                  {/* <h4 className="h-full w-full bg-wht p-20 font-poppins text-lg font-semibold text-slate-700 "></h4> */}
                  <ReactPlayer url={item.youtubeLink} controls />
                </div>

                <div className="flex flex-1 flex-col items-start justify-center gap-1 ">
                  <div  >
                    <a
                      title="Live Project"
                      href={item.liveLink}
                      target="_blank"
                      className="font-poppins text-base font-semibold text-slate-700 transition-all duration-500 hover:text-orange-500 sm:text-lg "
                    >
                      {item.title}{" "}
                    </a>
                    <span className="flex items-center justify-start gap-2 w-full" >
                    <a
                      className="flex h-fit w-fit"
                      title="Live Project"
                      href={item.liveLink}
                      target="_blank"
                    >
                      <AiOutlineLink className="cursor-pointer rounded-full text-slate-600 transition-all duration-500 hover:text-orange-500 " />
                    </a>
                    <a
                      className="flex h-fit w-fit"
                      title="GitHub"
                      href={item.gitHubLink}
                      target="_blank"
                    >
                      <AiFillGithub className="h-4 w-8 cursor-pointer rounded-full bg-slate-600 p-0.5 text-wht transition-all duration-500 hover:bg-orange-500 " />{" "}
                    </a>
                    </span>
                  </div>
                  <span className=" pb-1 font-poppins text-xs font-medium text-blue">
                    {item.date}
                  </span>
                  <h4 className="font-poppins text-xs text-justify font-medium text-slate-600 md:text-xms">
                    {item.description}{" "}
                  </h4>
                  <div className="flex w-full flex-wrap items-center justify-start gap-2 pt-5 ">
                    {item.techStack.map((tech, index) => (
                      <a
                        href={`https://www.google.com/search?q=${tech}`}
                        target="_blank"
                        key={index}
                        className="cursor-pointer rounded-sm bg-blue px-1.5 py-0.5 font-poppins text-xs font-medium text-wht transition-all duration-300 hover:bg-orange-600 sm:rounded sm:text-sm sm:font-semibold"
                      >
                        {" "}
                        {tech}{" "}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <h3 className="animate__animated animate__fadeInDown animate__delay-1s py-4 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht sm:text-3xl">
            {`< Mini Projects />`}
          </h3>
          <div className="grid grid-cols-1 max-w-5xl xl:grid-cols-3 md:grid-cols-2 w-full justify-items-center content-center gap-5" >
            {miniProjects.map((item) => {
              return (
                <div 
                  key={item.title}
                  className="animate__animated animate__fadeIn animate__delay-1s  relative flex flex-col w-full flex-wrap items-start justify-start gap-1 rounded border-orange-400 border-4 bg-wht py-6 px-4 transition-all duration-500 rounded-tr-custom md:bg-gray-200 md:px-8"
                >
                  <a
                    className="flex h-fit w-fit "
                    title="GitHub"
                    href={item.githubLink}
                    target="_blank"
                  >
                    <AiFillGithub className="h-8 w-8 absolute cursor-pointer -top-4 left-5 rounded-md bg-slate-600 hover:scale-110 p-1.5 text-wht transition-all duration-500 hover:bg-orange-500" />{" "}
                  </a>
                  <div className="" >
                    <a
                      title="Live Project"
                      href={item.liveLink}
                      target="_blank"
                      className="font-poppins text-base font-semibold text-slate-700 transition-all duration-500 hover:text-orange-500 sm:text-lg "
                    >
                      {item.title}{" "}
                    </a>
                  </div>
                  <span className=" pb-1 font-poppins text-xs font-medium text-blue">
                    {item.date}
                  </span>
                  <h4 className="font-poppins text-xs text-justify leading-4 font-medium text-slate-600 md:text-xms">
                    {item.description}{" "}
                  </h4>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
