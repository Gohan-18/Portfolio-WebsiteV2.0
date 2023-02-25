import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { CgFileDocument } from "react-icons/cg";
import { TbCertificate } from "react-icons/tb";
import { CgStyle } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
// CgFileDocument

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
      <section className="z-5 padding-top flex h-full w-full flex-col items-center justify-center bg-dark-blue px-4  pb-12 leading-6 transition-all duration-500 sm:px-10 md:px-14  ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-4 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht transition-all duration-500 sm:text-3xl">
            {`< About />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s md:]hborder-indigo-800 mt-1 flex h-full w-full max-w-4xl flex-col items-center justify-center gap-4 rounded border-t-4 border-orange-500 py-5 px-4 text-sm transition-all duration-500 sm:text-base md:mt-0 md:gap-2 md:rounded-lg md:bg-gray-200 md:px-10 md:py-10">
            <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
              {/* <CgFileDocument className="h-20 w-20 text-gray-200 md:text-blue p-1 fill-orange-500 " /> */}
              <RiProfileLine className="h-20 w-20 fill-wht p-2 text-gray-200 md:fill-blue " />
              <p className="max-w-sm text-justify font-poppins text-sm font-medium  text-wht  md:max-w-xl md:text-base md:text-slate-700">
                Hey there, 👋 my name is{" "}
                <span className="font-semibold text-orange-400 ">Prabhat</span>{" "}
                and i'm a{" "}
                <span
                  title="MongoDB ExpressJs React NodeJs"
                  className="font-semibold"
                >
                  Fullstack MERN WebDeveloper
                </span>{" "}
                who can help you in Creating And Fixing{" "}
                <span className="font-semibold ">Front-End</span> of your React
                based WebApp(s).
                {/* I have completed my Bachelor's degree in Computer Application in
                2022 and currently working at Wipro as Scholar Trainee. */}{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
              {/* <CgFileDocument className="h-20 w-20 text-gray-200 md:text-blue p-1 fill-orange-500 " /> */}
              <CgStyle className="h-20 w-20 fill-orange-500 p-1 text-gray-200 md:text-blue " />
              <p className="max-w-sm text-justify font-poppins text-sm font-medium  text-wht  md:max-w-xl md:text-base md:text-slate-700">
                {/* I have completed my Bachelor's degree in Computer Application in
                2022 and currently working at Wipro as Scholar Trainee. */}{" "}
                I have got a knack of Design and Aesthetic, add proficient
                knowledge of using tools like ReactJs, Figma, Redux-Toolkit with it and
                Wlah!!! you have got an awesome Front-End developer, who can not
                only create Front-End for your WebApp(s), but also make them
                look good.
              </p>
            </div>
            <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
              {/* <CgStyle className="h-20 w-20 text-gray-200 md:text-blue p-1 fill-orange-500 "/> */}
              <TbCertificate className="h-20 w-20 text-wht md:text-blue p-2  " />
              <p className="max-w-sm text-justify font-poppins  text-sm font-medium text-wht md:max-w-xl md:text-base md:text-slate-700">
                I completed my Bachelor's degree in Computer Application in
                2022 and currently working at Wipro as Scholar Trainee.
              </p>
            </div>
            {/* <p className="max-w-sm text-center font-poppins  font-medium capitalize text-wht text-sm md:max-w-lg md:text-base md:text-slate-700">
              I can help you in creating frontEnd webApps using{" "}
              <span className=" font-semibold ">ReactJs/Ts</span>, state
              management tool like{" "}
              <span className="font-semibold ">redux-toolkit</span>, managing
              backend using popular SaaS like{" "}
              <span className="font-semibold ">firebase</span> or in making
              frontEnd UI using modern UI libraries like{" "}
              <span className="font-semibold">Material ui v5/Tailwind</span>.
            </p> */}
            <div className="flex flex-col items-center justify-start gap-4 lg:flex-row">
              <BiSearchAlt className="h-20 w-20 fill-orange-500 p-2.5 text-blue " />
              <p className="max-w-sm text-justify font-poppins text-sm font-medium  text-wht md:max-w-xl md:text-base md:text-slate-700">
                Right now I am in Hunt for Front-End opportunities (preferably
                around React tech stack). So, if you are an organisation with
                TASTE; and looking for someone with mentioned tech skills,{" "}
                <Link
                  onClick={() => setActiveFilter("Contact")}
                  className="inline-block rounded bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht transition-all duration-500 hover:bg-orange-500 sm:text-sm "
                  to={"/Contact"}
                >
                  Contact Me
                </Link>{" "}
                {`;)`}
                {/* or checkout my{" "}
              <Link
                onClick={() => setActiveFilter("Projects")}
                className=" inline-block rounded border-2 border-blue bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 sm:text-sm "
                to={"/Projects"}
              >
                Projects
              </Link> */}
              </p>
            </div>
            <p className="mt-4 max-w-sm border-t-4 border-t-blue pt-4 text-center font-poppins text-sm font-semibold uppercase text-wht md:max-w-xl md:text-base md:text-slate-700">
              {`-`} for the list of all the tools i can help you with, checkout{" "}
              <Link
                onClick={() => setActiveFilter("Technologies")}
                className=" inline-block rounded bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:bg-orange-500 sm:text-sm "
                to={"/Technologies"}
              >
                Technologies
              </Link>{" "}
              page {`-`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
