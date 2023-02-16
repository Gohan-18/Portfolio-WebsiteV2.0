import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <header className="header fixed z-20 flex w-full items-center justify-center px-10">
          <nav className="flex h-full w-full flex-wrap items-center justify-between ">
            <ul className="flex h-full items-center justify-center gap-3 border-b-2 pr-16">
              <li>
                <a
                  // href="index.html"
                  onClick={() => navigate("/")}
                  className="cursor-pointer border-r-2 border-solid pr-3 font-catamaran text-lg font-black leading-4 transition-all duration-700 hover:text-orange-300"
                >
                  PRABHAT.
                </a>
              </li>
              {["About", "Technologies", "Projects"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      // href={`#${item}`}
                      onClick={() => navigate(`/${item}`)}
                      id="homeBtn"
                      className="cursor-pointer rounded font-poppins text-xs font-medium leading-6 transition-all duration-500  hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul>
              <li>
                <a
                  href="#contact"
                  className="rounded border-2 px-1.5 py-0.5 font-poppins text-sm font-semibold leading-6 transition-all duration-500 hover:bg-white hover:text-indigo-800 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}

export default Navbar;
