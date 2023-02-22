import { useContext, useEffect } from "react";
import { AppContext } from "../App";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Link } from "react-router-dom";

const Technologies = () => {
  const { setActiveFilter } = useContext(AppContext);

  useEffect(() => {
    setActiveFilter("Technologies");
  }, []);

  return (
    <>
      {/* <section className="z-5 flex  w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12  "> */}
      <section className="z-5 padding-top flex w-full items-center justify-center bg-dark-blue px-4 pb-12 transition-all duration-500 sm:px-10 md:px-14 :h-screen ">
        <div className=" flex-Wrap flex h-full w-full flex-col items-center justify-center ">
          <h3 className="animate__animated animate__fadeInDown pt-2 pb-5 text-center font-catamaran text-2xl font-extrabold uppercase leading-3 text-wht sm:text-3xl ">
            {`< Technologies />`}
          </h3>

          {/* <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl flex-wrap flex-col items-center justify-center rounded-xl  border-indigo-800 bg-gray-300 p-8"> */}
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl  flex-col  items-center justify-center gap-1 rounded border-t-4 border-orange-500 bg-wht py-6 px-4 text-sm transition-all duration-500 sm:text-base md:gap-3 md:rounded-lg md:bg-gray-200 md:px-10 md:py-10 lg:flex-row">
            <div className="animate__animated animate__fadeIn animate__delay-1s md:w-lg  grid w-full max-w-sm grid-cols-3 grid-rows-4 items-center justify-items-center gap-6 border-b-4 border-indigo-800 px-4 pt-4 pb-7 lg:w-1/2 lg:border-b-0 lg:border-r-4">
              
              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <GrReactjs className=" cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  group-hover:bg-orange-500" />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  React
                </span>
              </div>
              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <DiJavascript1 className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 group-hover:bg-orange-500" />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Javascript
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiTypescript
                  // title="TypeScript"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Typescript
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiRedux className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500" />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Redux Toolkit
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <DiNodejs
                  // title="NodeJs"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  NodeJs
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiMaterialui
                  // title="Material Ui v5"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Material Ui
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiTailwindcss
                  // title="Tailwind CSS"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Tailwind CSS
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiStyledcomponents
                  // title="Styled Components"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Styled Component
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <DiHtml5
                  // title="HTML5"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  HTML5
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <DiCss3
                  // title="CSS3"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  CSS3
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <SiVite
                  // title="Vite"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Vite
                </span>
              </div>

              <div className="group relative flex w-fit h-full items-start justify-start transition-all duration-300">
                <IoLogoFirebase
                  // title="Firebase"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  hover:bg-orange-500"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-500 px-1 pt-1 font-poppins text-xxs leading-3 text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Firebase
                </span>
              </div>
            </div>

            <div className="flex w-full max-w-sm flex-col items-center justify-start gap-2 pt-5 lg:w-1/2 lg:px-4 lg:pt-0  ">
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl font-poppins font-semibold capitalize text-slate-600">
                - These are the tech stacks i have worked on and am proficient
                in working with.
              </p>
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl font-poppins font-semibold capitalize text-slate-600">
                - Apart from the listed technologies, i'm also well efficient in
                working with{" "}
                <span className="font-semibold text-orange-600">ExpressJs</span>{" "}
                and{" "}
                <span className="font-semibold text-orange-600">MongoDB</span>{" "}
                for creating backend for webApps.
              </p>
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl font-poppins font-semibold capitalize text-slate-600">
                - I can convert UI mockups from{" "}
                <span className="font-semibold text-orange-600">
                  Figma/sketch
                </span>{" "}
                to the front-End of your webApp using mentioned tools.
              </p>
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl font-poppins font-semibold capitalize text-slate-600">
                - checkout my proof of work {" "}
                <Link
                  onClick={() => setActiveFilter("Projects")}
                  className=" inline-block rounded bg-blue px-1.5 py-0.5 font-poppins text-xs font-semibold text-wht  transition-all duration-500 hover:bg-orange-500 sm:text-sm "
                  to={"/Projects"}
                >
                  Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
