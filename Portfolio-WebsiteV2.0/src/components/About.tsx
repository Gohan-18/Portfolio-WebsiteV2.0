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
      <section className="z-5 padding-top flex h-full w-full flex-col items-center justify-center bg-dark-blue px-4  pb-12 leading-6 transition-all duration-500 sm:px-10 md:bg-wht md:px-14  ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-4 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht transition-all duration-500 sm:text-3xl md:text-indigo-800">
            {`< About />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s mt-1 flex h-full w-full max-w-4xl flex-col items-center justify-center gap-2 rounded border-t-4 border-orange-400 py-5 px-4 text-sm transition-all duration-500 sm:text-base md:mt-0 md:gap-2 md:rounded-lg md:border-indigo-800 md:bg-gray-300 md:px-10 md:py-10">
            <p className="max-w-sm text-center font-poppins text-sm font-medium capitalize text-wht  md:max-w-xl md:text-base md:text-slate-700">
              Hey there, 👋 my name is{" "}
              <span className="font-semibold text-orange-400 ">Prabhat</span>{" "}
              and i'm a{" "}
              <span className="font-semibold">fullstack MERN webDeveloper</span>{" "}
              with experties in making{" "}
              <span className="font-semibold ">frontend</span> webApps using
              React. i have completed my bachelors in computer application in
              2022 and currently working at wipro as scholar trainee.
            </p>
            <p className="max-w-sm text-center font-poppins  text-sm font-medium capitalize text-wht md:max-w-xl md:text-base md:text-slate-700">
              i have a knack of design and asthetics, add proficient knowledge
              of using tools like ReactJs, Redux-Toolkit with it and wlah!! you
              have got an awesome Front-End developer, who can not only create
              front-End for your webApps, but also make them look good.
            </p>
            <p className="max-w-sm text-center font-poppins  text-sm font-medium capitalize text-wht md:max-w-xl md:text-base md:text-slate-700">
              {`<`} for the list of all the tools i can help you with, checkout {" "}
                <Link
                  onClick={() => setActiveFilter("Technologies")}
                  className=" inline-block rounded border-2 border-blue bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 sm:text-sm "
                  to={"/Technologies"}
                >
                  Technologies
                </Link>
              {" "} page {`/>`}
            </p>
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
            <p className="max-w-sm text-center font-poppins text-sm font-medium capitalize text-wht md:max-w-xl md:text-base md:text-slate-700">
              currently I am looking for front-End opportunities (preferably
              around React tech stack). so if you are looking for someone with
              mentioned tech skills,{" "}
              <Link
                onClick={() => setActiveFilter("Contact")}
                className=" inline-block rounded border-2 border-blue bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:border-slate-100 hover:bg-slate-100 hover:text-indigo-800 sm:text-sm "
                to={"/Contact"}
              >
                Contact Me
              </Link>{" "}
              {`:)`}
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
        </div>
      </section>
    </>
  );
};

export default About;
