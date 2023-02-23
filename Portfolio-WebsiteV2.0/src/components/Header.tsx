import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Header = () => {

  const { setActiveFilter } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveFilter("");
  }, []);

  return (
    <>
      <section className="z-5 animate__animated animate__fadeIn flex h-screen w-full flex-wrap bg-small-screen-banner md:bg-light-dark-header-banner bg-no-repeat px-4 lg:px-14">
        <div
          className="w-full lg:w-1/2 padding-top mt-20 md:mt-10 lg:mt-20 pb-10 lg:pt-2 flex flex-col items-center justify-start lg:items-start lg:justify-center"
        >
          <div className="animate__animated animate__fadeInDown w-full  flex items-center justify-center flex-col lg:items-start ">
            <h2 className="hero-text w-full max-w-md lg:w-fit text-center lg:text-start border-b-2 font-catamaran md:pb-1 lg:pb-0 text-lg md:text-2xl font-black uppercase leading-8 lg:leading-10 text-white shadow-black drop-shadow-lg">
              {`< Hello world />`}
            </h2>
            {/* <h2 className=" line-throug w-fit pt-16 font-poppins text-sm font-medium uppercase leading-6 text-orange-400 shadow-black drop-shadow-lg">
              {`< Hello world />`}
            </h2> */}
            <h2 className="hero-text text-center max-w-md lg:text-start w-full pt-2 font-catamaran text-3xl md:text-4xl font-black uppercase leading-8 lg:leading-10 text-white shadow-black drop-shadow-lg">
              Welcome to my
            </h2>
            <h2 className="hero-text text-center lg:text-start pb-5 font-catamaran text-2xl md:text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              portfolio website .
            </h2>
          </div>
          <h3 className="animate__animated  animate__fadeInDown animate__delay-1s text-center lg:text-start pb-5 font-poppins text-sm md:text-lg font-bold capitalize leading-6 text-white max-w-md">
            I'm <span className="text-orange-400 ">Prabhat</span> , a
            Full-Stack MERN web developer with experties in Front-End webapp
            development.
          </h3>
          <h3 className="animate__animated animate__fadeInDown animate__delay-2s text-center lg:text-start pb-5 font-poppins text-sm md:text-lg font-bold capitalize leading-6 text-violet-200 max-w-md">
            This website holds information about my web development journey and
            the projects i have made till now.
          </h3>
          <button
            className= "animate__animated animate__fadeIn animate__delay-3s w-fit rounded border-2 bg-white px-2.5 py-1 font-poppins text-base font-bold leading-6 text-indigo-800 transition-all duration-300 hover:bg-orange-500 hover:text-wht  "
            onClick={() => navigate('/About')}
          >
            {`Let's Go >>>`}
          </button>
        </div>

        {/* <div className="h-full w-full"></div> */}
      </section>
    </>
  );
};

export default Header;
