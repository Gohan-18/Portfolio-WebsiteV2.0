import React from "react";
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

const Technologies = () => {
  return (
    <>
      <section className="z-5 flex h-screen w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12 ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-4 pb-5 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            Technologies
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl flex-wrap items-center justify-center rounded-xl  border-indigo-800 bg-gray-300 p-8">
            <div className="animate__animated animate__fadeIn animate__delay-1s  grid w-1/2 grid-cols-3 grid-rows-4 items-center justify-center gap-6 border-r-4 border-indigo-800 py-10 px-20">
              <div className="group relative w-fit ">
                <GrReactjs
                  title="React"
                  className=" cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-125 hover:bg-orange-600 hover:drop-shadow-2xl"
                  // style={{
                  //   cursor: 'pointer',
                  //   fontSize: "60px",
                  //   fill: "#f4f4f4",
                  //   backgroundColor: "#4e44ab",
                  //   padding: "14px",
                  //   borderRadius: "10px",
                  // }}
                />
                <p className="font-base absolute -bottom-1 left-2/4 -ml-4 font-poppins text-xs text-wht opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
                  React
                </p>
              </div>
              <DiJavascript1
                title="JavaScript"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiTypescript
                title="TypeScript"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiRedux
                title="Redux-Toolkit"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <DiNodejs
                title="NodeJs"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiMaterialui
                title="Material Ui v5"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiTailwindcss
                title="Tailwind CSS"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiStyledcomponents
                title="Styled Components"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <DiHtml5
                title="HTML5"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <DiCss3
                title="CSS3"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <SiVite
                title="Vite"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
              <IoLogoFirebase
                title="Firebase"
                className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-500 hover:scale-110 hover:bg-orange-600"
              />
            </div>

            <div className="w-1/2">
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl bg-gray-300 p-8 text-start font-poppins font-semibold capitalize text-slate-600">
                - These are the tech stacks i have worked on and am comfortable
                in working with. <br />
                <br />- Apart from the listed technologies, i am also well
                efficient in working with{" "}
                <span className="font-semibold text-orange-600">
                  ExpressJs
                </span>{" "}
                and{" "}
                <span className="font-semibold text-orange-600">MongoDB</span>{" "}
                for creating backend for webApps. <br /> <br /> - I can convert
                UI mockups from{" "}
                <span className="font-semibold text-orange-600">
                  Figma/sketch
                </span>{" "}
                to the front-End of your webApp using mentioned tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
