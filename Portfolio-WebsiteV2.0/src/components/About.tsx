import React from "react";

const About = () => {
  return (
    <>
      <section className="z-5 flex h-screen w-full bg-wht flex-col items-center justify-center px-28 pt-24 pb-12 ">
        <div className=" flex h-full w-full flex-col items-center justify-center">
          <h3 className="animate__animated animate__fadeInDown pt-4 pb-5 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800">
            About
          </h3>
          <p className="animate__animated animate__fadeIn animate__delay-1s h-full w-full rounded-xl bg-gray-300 p-8 text-center font-poppins font-semibold capitalize text-slate-600">
            Hey there what is up
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
