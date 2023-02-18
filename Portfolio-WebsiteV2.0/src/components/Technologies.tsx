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
              <GrReactjs
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <DiJavascript1
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiTypescript
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiRedux
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <DiNodejs
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiMaterialui
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiTailwindcss
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiStyledcomponents
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <DiHtml5
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <DiCss3
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <SiVite
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
              />
              <IoLogoFirebase
                style={{
                  fontSize: "60px",
                  fill: "#f4f4f4",
                  backgroundColor: "#4e44ab",
                  padding: "14px",
                  borderRadius: "10px",
                }}
                title="Vite"
              />
            </div>

            <div className="w-1/2">
              <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl bg-gray-300 p-8 text-start font-poppins font-semibold capitalize text-slate-600">
                - Apart from the listed technologies, i am also well efficient
                in working with{" "}
                <span className="font-semibold text-orange-600">ExpressJs</span>{" "}
                and{" "}
                <span className="font-semibold text-orange-600">MongoDB</span>{" "}
                for creating backend for webApps. <br />- I can convert UI
                mockups from{" "}
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
