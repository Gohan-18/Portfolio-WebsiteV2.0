import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="z-5 flex h-screen w-full bg-wht flex-col items-center justify-center px-28 pt-24 pb-12 leading-6">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-4 pb-5 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            About
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s h-full w-full flex items-center justify-center rounded-xl bg-gray-300 max-w-4xl flex-col pb-4 px-10">
            <p className="text-center font-poppins font-medium capitalize max-w-xl text-slate-700 " >
            Hey, 👋 my name is <span className="text-orange-600 underline font-semibold">Prabhat</span> and i'm a <span className="text-orange-600 font-semibold">fullstack MERN webDeveloper</span> with experties in making <span className="text-orange-600 font-semibold ">frontend</span> webApps . i completed my bachelors in computer application in 2022 and currently working at wipro as scholar trainee.
            </p>
            <p className="text-center font-poppins font-medium capitalize max-w-xl text-slate-700 " >
              I can help you in creating frontEnd webApps using <span className="text-indigo-800 ">reactJs/Ts</span>, state management tool like <span className="text-indigo-800 ">redux-toolkit</span>, managing backend using popular SaaS like <span className="text-indigo-800 ">firebase</span> or in making frontEnd UI using modern UI libraries like <span className="text-indigo-800 ">Material ui v5/Tailwind</span>.
            </p>
            <p className="text-center font-poppins font-medium capitalize max-w-xl text-slate-700 " >
              still having second thought!!? don't worry, just check my proof of work at my <Link className="rounded border-2 border-blue px-1.5 py-0.5 font-poppins text-sm font-semibold leading-6 text-blue transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 " to={'/Projects'} >Projects</Link> page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
