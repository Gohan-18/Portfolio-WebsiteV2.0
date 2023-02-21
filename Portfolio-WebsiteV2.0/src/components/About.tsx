import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

// type PostProps = {
//   activeFilter : string,
//   setActiveFilter : any
// }

const About = () => {
  const { setActiveFilter } = useContext(AppContext);
  // console.log(activeFilter)
  useEffect(() => {
    setActiveFilter("About");
  }, []);

  return (
    <>
      <section className="z-5 flex w-full flex-col items-center justify-center bg-dark-blue px-4 pt-24 pb-12 leading-6 transition-all duration-500 sm:px-10 md:bg-wht md:px-14 lg:h-screen ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-4 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht transition-all duration-500 sm:text-3xl md:text-indigo-800">
            {`< About />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl flex-col items-center justify-center gap-2 rounded border-l-4 border-r-4 border-orange-600 bg-wht py-6 px-4 text-sm transition-all duration-500 sm:text-base md:gap-2 md:rounded-lg md:border-indigo-800 md:bg-gray-300 md:px-10 md:py-10">
            <p className="max-w-sm text-center font-poppins text-xs font-medium capitalize text-slate-700 sm:text-sm md:max-w-lg md:text-base">
              Hey there, 👋 my name is{" "}
              <span className="font-semibold text-orange-600 ">Prabhat</span>{" "}
              and i'm a{" "}
              <span className="font-semibold text-orange-600">
                fullstack MERN webDeveloper
              </span>{" "}
              with experties in making{" "}
              <span className="font-semibold text-orange-600 ">frontend</span>{" "}
              webApps using React. i have completed my bachelors in computer
              application in 2022 and currently working at wipro as scholar
              trainee.
            </p>
            <p className="max-w-sm text-center font-poppins text-xs font-medium capitalize text-slate-700 sm:text-sm md:max-w-lg md:text-base">
              I can help you in creating frontEnd webApps using{" "}
              <span className="text-indigo-800 ">ReactJs/Ts</span>, state
              management tool like{" "}
              <span className="text-indigo-800 ">redux-toolkit</span>, managing
              backend using popular SaaS like{" "}
              <span className="text-indigo-800 ">firebase</span> or in making
              frontEnd UI using modern UI libraries like{" "}
              <span className="text-indigo-800 ">Material ui v5/Tailwind</span>.
            </p>
            <p className="max-w-sm text-center font-poppins text-xs font-medium capitalize text-slate-700 sm:text-sm md:max-w-lg md:text-base">
              currently I am looking for front-End opportunities (preferably
              around React tech stack). so if you are looking for someone with
              mentioned tech skill,{" "}
              <Link
                onClick={() => setActiveFilter("Contact")}
                className=" inline-block rounded border-2 border-blue bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 sm:text-sm "
                to={"/Contact"}
              >
                Contact Me
              </Link>{" "}
              {`:)`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
