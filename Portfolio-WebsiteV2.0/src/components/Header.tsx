import React from "react";

const Header = () => {
  return (
    <>
      <section className="z-5 flex h-screen w-full flex-wrap bg-header-banner bg-no-repeat px-10 animate__animated animate__fadeIn">
        <div
          // id="Home"
          className="flex-1 pt-24"
        >
          <div className="animate__animated animate__fadeInDown">
            <h2 className="hero-text pt-20 pr-16 font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              Hey there ,
            </h2>
            <h2 className="hero-text font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              Welcome to my
            </h2>
            <h2 className="hero-text pb-5 font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              portfolio website .
            </h2>
          </div>
          <h3 className="animate__animated  animate__fadeInDown animate__delay-1s pb-5 font-poppins text-lg font-bold capitalize leading-6 text-white">
            I'm <span className="text-amber-400 underline">Prabhat</span> , a
            Full-Stack MERN web developer with experties in Front-End webapp
            development.
          </h3>
          <h3 className="animate__animated animate__fadeInDown animate__delay-2s font-poppins text-lg font-bold capitalize leading-6 text-violet-200">
            This website holds information about my web development journey and
            the projects i have made till now.
          </h3>
        </div>

        <div className="h-full w-full flex-1"></div>
      </section>
    </>
  );
};

export default Header;
