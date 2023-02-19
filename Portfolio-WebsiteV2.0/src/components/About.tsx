import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

// type PostProps = {
//   activeFilter : string,
//   setActiveFilter : any
// }

const About = () => {

  const { setActiveFilter } = useContext(AppContext)
  // console.log(activeFilter)
  useEffect(() => {
    setActiveFilter('About')
  }, [])

  return (
    <>
      <section className="z-5 flex h-screen w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12 leading-6">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-4 pb-5 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            About
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl flex-col items-center justify-center rounded-xl border-l-4 border-r-4 border-indigo-800 bg-gray-300 px-10 pb-4">
            <p className="max-w-xl text-center font-poppins font-medium capitalize text-slate-700 ">
              Hey there, 👋 my name is{" "}
              <span className="font-semibold text-orange-600 underline">
                Prabhat
              </span>{" "}
              and i'm a{" "}
              <span className="font-semibold text-orange-600">
                fullstack MERN webDeveloper
              </span>{" "}
              with experties in making{" "}
              <span className="font-semibold text-orange-600 ">frontend</span>{" "}
              webApps using React. i have completed my bachelors in computer application in 2022
              and currently working at wipro as scholar trainee.
            </p>
            <br />
            <p className="max-w-xl text-center font-poppins font-medium capitalize text-slate-700 ">
              I can help you in creating frontEnd webApps using{" "}
              <span className="text-indigo-800 ">ReactJs/Ts</span>, state
              management tool like{" "}
              <span className="text-indigo-800 ">redux-toolkit</span>, managing
              backend using popular SaaS like{" "}
              <span className="text-indigo-800 ">firebase</span> or in making
              frontEnd UI using modern UI libraries like{" "}
              <span className="text-indigo-800 ">Material ui v5/Tailwind</span>.
            </p>
            <br />
            <p className="max-w-xl text-center font-poppins font-medium capitalize text-slate-700 ">
              currently I am looking for front-End opportunities (preferably around React tech stack). so if you are looking for someone with mentioned tech skill, {" "}
              <Link
                onClick={() => setActiveFilter('Contact')}
                className="rounded border-2 border-blue bg-blue px-1.5 py-0.5 font-poppins text-sm font-semibold  text-wht transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 "
                to={"/Contact"}
              >
                Contact Me
              </Link>{" "}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
