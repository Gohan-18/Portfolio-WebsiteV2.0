import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import "animate.css";
import { CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { RiTelegramFill } from "react-icons/ri";

function Navbar() {
  const { activeFilter, setActiveFilter } = useContext(AppContext);
  const { toggle, setToggle } = useContext(AppContext);

  // console.log(toggle)

  return (
    <>
      <section>
        <header className="header animate__animated animate__fadeInDown fixed z-20 flex w-full items-center justify-center">
          <nav className="flex h-full w-full flex-wrap items-center justify-between border-b-2 px-5 sm:px-8 md:hidden ">
            <ul className="flex h-full w-full items-center justify-between gap-3">
              <li>
                <Link
                  to={"/"}
                  // href="index.html"
                  onClick={() => {
                    setActiveFilter("");
                    setToggle(false);
                  }}
                  className="cursor-pointer border-r-2 border-solid pr-3 font-catamaran text-lg font-black leading-4 transition-all duration-500 hover:text-orange-300"
                >
                  PRABHAT.
                </Link>
              </li>
              <li
                onClick={() => setToggle(!toggle)}
                className="transition-all duration-500"
              >
                {!toggle ? (
                  <HiMenuAlt1 className="font-4xl  h-8 w-8 cursor-pointer rounded-full p-1 text-wht transition-all duration-500 hover:bg-wht hover:text-indigo-800" />
                ) : (
                  <RxCross2 className="font-4xl h-8 w-8 cursor-pointer rounded-full p-1 text-wht transition-all duration-500 hover:bg-wht hover:text-indigo-800" />
                )}
              </li>
            </ul>
          </nav>

          <nav className="hidden h-full w-full flex-wrap items-center justify-between px-10 md:flex ">
            <ul className="flex h-full items-center justify-center gap-3 border-b-2 pr-16">
              <li>
                <Link
                  to={"/"}
                  // href="index.html"
                  onClick={() => setActiveFilter("")}
                  className="cursor-pointer border-r-2 border-solid pr-3 font-catamaran text-lg font-black leading-4 transition-all duration-700 hover:text-orange-300"
                >
                  PRABHAT.
                </Link>
              </li>
              {["About", "Technologies", "Projects"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item}`}
                    // href={`#${item}`}
                    onClick={() => setActiveFilter(item)}
                    className={`cursor-pointer rounded font-poppins text-xs font-medium ${
                      activeFilter === item
                        ? "bg-white px-1.5 py-0.5 text-sm font-semibold text-indigo-800 "
                        : "hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800"
                    } text-center leading-6 transition-all duration-500 `}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <ul>
              <li>
                <Link
                  to={"/Contact"}
                  onClick={() => setActiveFilter("Contact")}
                  // href="#contact"
                  className={` rounded border-2 px-1.5 py-0.5 font-poppins text-sm font-semibold leading-6 transition-all duration-500 ${
                    activeFilter === "Contact"
                      ? "bg-white text-indigo-800"
                      : "hover:bg-white hover:text-indigo-800"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Small screen Navigation */}

        <div
          className={`animate__animated animate__slideInDown fixed z-50 flex w-full flex-col items-center justify-center gap-3 bg-dark-blue md:h-0 ${
            toggle ? " h-screen" : "h-0"
          } border-b-4 border-wht transition-all duration-500 `}
        >
          {["About", "Technologies", "Projects"].map((item, index) => (
            <Link
              key={index}
              to={`/${item}`}
              onClick={() => {
                setActiveFilter(item);
                setToggle(!toggle);
              }}
              className={`cursor-pointer rounded font-poppins text-sm font-medium ${
                activeFilter === item
                  ? "bg-white px-1.5 py-0.5 text-sm font-semibold text-indigo-800 "
                  : "hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800"
              } text-center leading-6 transition-all duration-300 ${
                toggle ? "visible" : "invisible"
              } `}
            >
              {item}
            </Link>
          ))}

          <Link
            to={"/Contact"}
            onClick={() => {
              setActiveFilter("Contact");
              setToggle(!toggle);
            }}
            className={`cursor-pointer rounded font-poppins text-sm font-medium ${
              activeFilter === "Contact"
                ? "bg-white px-1.5 py-0.5 text-sm font-semibold text-indigo-800 "
                : "hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800"
            } text-center leading-6 transition-all duration-300 ${
              toggle ? "visible" : "invisible"
            } `}
          >
            Contact
          </Link>

          <div
            className={`animate__animated animate__slideInUp ${
              toggle ? "visible" : "invisible"
            } absolute bottom-0 flex max-w-xs items-center justify-center gap-1 rounded py-1.5 px-3 font-poppins text-sm font-medium text-wht md:bottom-1  `}
          >
            <a href="https://www.linkedin.com/in/prabhat187/" target="_blank">
              <CiLinkedin
                className={`cursor-pointer rounded ${
                  toggle ? "visible" : "invisible"
                } bg-dark-blue p-0.5 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600`}
              />
            </a>
            <a href="https://github.com/Gohan-18" target="_blank">
              <AiFillGithub
                className={`cursor-pointer rounded ${
                  toggle ? "visible" : "invisible"
                } bg-dark-blue p-1 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600`}
              />
            </a>
            <a href="https://www.instagram.com/prab_hat18/" target="_blank">
              <BsInstagram
                className={`cursor-pointer rounded ${
                  toggle ? "visible" : "invisible"
                } bg-dark-blue p-1.5 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600`}
              />
            </a>
            <a href="https://t.me/Prab_hat18/" target="_blank">
              <RiTelegramFill
                className={`cursor-pointer rounded ${
                  toggle ? "visible" : "invisible"
                } bg-dark-blue p-1 text-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600`}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
