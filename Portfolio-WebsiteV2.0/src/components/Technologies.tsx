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

const Technologies = () => {

  const { setActiveFilter } = useContext(AppContext)

  useEffect(() => {
    setActiveFilter('Technologies')
  }, [])

  return (
    <>
      <section className="z-5 flex h-screen w-full flex-col items-center justify-center bg-wht px-28 pt-24 pb-12 ">
        <div className=" flex flex-Wrap h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown text-center pt-2 pb-5 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
          {`< Technologies />`}
          </h3>
          <div className="animate__animated animate__fadeIn animate__delay-1s flex h-full w-full max-w-4xl flex-wrap items-center justify-center rounded-xl  border-indigo-800 bg-gray-300 p-8">
            <div className="animate__animated animate__fadeIn animate__delay-1s  grid w-1/2 grid-cols-3 grid-rows-4 items-center justify-center gap-6 border-r-4 border-indigo-800 py-10 px-20">
              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <GrReactjs className=" cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300  group-hover:bg-orange-600" />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  React
                </span>
              </div>
              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <DiJavascript1 className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600" />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Javascript
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiTypescript
                  // title="TypeScript"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Typescript
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiRedux
                  // title="Redux-Toolkit"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Redux Toolkit
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <DiNodejs
                  // title="NodeJs"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  NodeJs
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiMaterialui
                  // title="Material Ui v5"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Material Ui
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiTailwindcss
                  // title="Tailwind CSS"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Tailwind CSS
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiStyledcomponents
                  // title="Styled Components"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Styled Component
                </span>
              </div>
              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <DiHtml5
                  // title="HTML5"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  HTML5
                </span>
              </div>

              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <DiCss3
                  // title="CSS3"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  CSS3
                </span>
              </div>
              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <SiVite
                  // title="Vite"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Vite
                </span>
              </div>
              <div className="group relative flex w-fit items-center justify-center transition-all duration-300">
                <IoLogoFirebase
                  // title="Firebase"
                  className="cursor-pointer rounded-lg bg-blue fill-wht p-3 text-5xl transition-all duration-300 hover:scale-110 hover:bg-orange-600"
                />
                <span className="font-base invisible absolute h-full w-full cursor-pointer rounded-sm bg-orange-600 px-1 py-0.5 font-poppins text-xxs text-wht opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  Firebase
                </span>
              </div>
            </div>

            <div className="w-1/2">
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl bg-gray-300 p-8 text-start font-poppins font-semibold capitalize text-slate-600">
                - These are the tech stacks i have worked on and am proficient
                in working with. <br />
                <br />- Apart from the listed technologies, i'm also well
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
