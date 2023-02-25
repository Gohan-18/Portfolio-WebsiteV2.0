import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import HeroImg from "../assets/Hero-Image.png";
const Header = () => {
  const { activeFilter, setActiveFilter } = useContext(AppContext);
  const navigate = useNavigate();
  // const { activeFilter } = useContext(AppContext);

  useEffect(() => {
    setActiveFilter("");
  }, []);
  // md:bg-light-dark-header-banner
  // bg-small-screen-banner sm:bg-bubble-bg
  return (
    <>
      <section className="z-5 animate__animated animate__fadeIn flex h-screen w-full flex-wrap justify-center bg-polygon-bg  bg-no-repeat px-4 lg:px-14">
        <section className="flex max-w-7xl justify-center ">
          <div className="padding-top mt-20 flex w-full flex-col  items-center justify-start pb-10 md:mt-10 lg:mt-20 lg:w-1/2 lg:items-start lg:justify-center lg:pt-2">
            <div className="animate__animated animate__fadeInDown flex w-full flex-col items-center justify-center bg-dark-blue lg:items-start ">
              <h2 className="hero-text w-full max-w-md border-b-2 text-center font-catamaran text-lg font-black uppercase leading-8 text-white shadow-black drop-shadow-lg md:pb-1 md:text-2xl lg:w-fit lg:pb-0 lg:text-start lg:leading-10">
                {`< Namasté world />`}
              </h2>
              {/* <h2 className=" line-throug w-fit pt-16 font-poppins text-sm font-medium uppercase leading-6 text-orange-400 shadow-black drop-shadow-lg">
              {`< Hello world />`}
            </h2> */}
              <h2 className="hero-text w-full max-w-md pt-2 text-center font-catamaran text-3xl font-black uppercase leading-8 text-white shadow-black drop-shadow-lg md:text-4xl lg:text-start lg:leading-10">
                Welcome to my
              </h2>
              <h2 className="hero-text pb-5 text-center font-catamaran text-2xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg md:text-4xl lg:text-start">
                portfolio website .
              </h2>
            </div>
            <h3 className="animate__animated  animate__fadeInDown animate__delay-1s max-w-md pb-5 text-center font-poppins text-sm font-bold capitalize leading-6 text-white md:text-lg lg:text-start">
              I'm <span className="text-orange-400 ">Prabhat</span> , a
              Full-Stack{" "}
              <span title="MongoDB ExpressJS React NodeJs">MERN</span> web
              developer with experties in Front-End webapp development.
            </h3>
            <h3 className="animate__animated animate__fadeInDown animate__delay-2s max-w-md pb-5 text-center font-poppins text-sm font-bold capitalize leading-6 text-violet-200 md:text-lg lg:text-start">
              This website holds information about my web development journey
              and the projects i have made till now.
            </h3>
            <button
              className="animate__animated animate__fadeIn animate__delay-3s w-fit rounded border-2 bg-white px-2.5 py-1 font-poppins text-base font-bold leading-6 text-indigo-800 transition-all duration-300 hover:bg-orange-500 hover:text-wht  "
              onClick={() => navigate("/About")}
            >
              {`Let's Go >>>`}
            </button>
          </div>

          <div className="animate__animated animate__fadeIn hidden h-full w-full items-center justify-center pb-14  lg:flex lg:w-1/2">
            <span>
              <img src={HeroImg} alt="Hero image" />
            </span>
          </div>
          <div className="fixed bottom-0 left-1 hidden rounded-sm md:flex">
            <strong
              className={`font-poppins text-xxs font-normal ${
                activeFilter === "Contact" ? "text-dark-blue" : "text-wht"
              } `}
            >
              © 2023 Prabhat | All rights reserved
            </strong>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
