import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

function Navbar() {

  const { activeFilter ,setActiveFilter } = useContext(AppContext)

  // console.log(activeFilter)

  return (
    <>
      <section>
        <header className="header fixed z-20 flex w-full items-center justify-center px-10 animate__animated animate__fadeInDown">
          <nav className="flex h-full w-full flex-wrap items-center justify-between ">
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
      </section>
    </>
  );
}

export default Navbar;
