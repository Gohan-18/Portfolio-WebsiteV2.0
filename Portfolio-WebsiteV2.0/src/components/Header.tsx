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
      <section className="z-5 animate__animated animate__fadeIn flex h-screen w-full flex-wrap bg-light-dark-header-banner bg-no-repeat px-10">
        <div
          // id="Home"
          className="flex-1 pt-24"
        >
          <div className="animate__animated animate__fadeInDown pt-20">
            <h2 className="hero-text w-fit border-b-2 pb-1 font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              {`< Hello world />`}
            </h2>
            {/* <h2 className=" line-throug w-fit pt-16 font-poppins text-sm font-medium uppercase leading-6 text-orange-400 shadow-black drop-shadow-lg">
              {`< Hello world />`}
            </h2> */}
            <h2 className="hero-text w-fit pt-2 font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              Welcome to my
            </h2>
            <h2 className="hero-text pb-5 font-catamaran text-4xl font-black uppercase leading-10 text-white shadow-black drop-shadow-lg">
              portfolio website.
            </h2>
          </div>
          <h3 className="animate__animated  animate__fadeInDown animate__delay-1s pb-5 font-poppins text-lg font-bold capitalize leading-6 text-white">
            I'm <span className="text-orange-400 underline">Prabhat</span> , a
            Full-Stack MERN web developer with experties in Front-End webapp
            development.
          </h3>
          <h3 className="animate__animated animate__fadeInDown animate__delay-2s pb-5 font-poppins text-lg font-bold capitalize leading-6 text-violet-200">
            This website holds information about my web development journey and
            the projects i have made till now.
          </h3>
          <button
            className= "animate__animated animate__fadeIn animate__delay-3s w-fit rounded border-2 bg-white px-2 py-1 font-poppins text-base font-bold leading-6 text-indigo-800 transition-all duration-500 hover:bg-orange-500 hover:text-wht  "
            onClick={() => navigate('/About')}
          >
            Let's Go!!
          </button>
        </div>

        <div className="h-full w-full flex-1"></div>
      </section>
    </>
  );
};

export default Header;
