import "./App.css";
import "animate.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <section>
        <header className="header fixed z-20 flex w-full items-center justify-center px-10">
          <nav className="flex h-full w-full flex-wrap items-center justify-between ">
            <ul className="flex h-full items-center justify-center gap-3 border-b-2 pr-16">
              <li>
                <a
                  href="index.html"
                  className="hover:text-orange-300 border-r-2 border-solid pr-3 font-catamaran text-lg font-black leading-4 transition-all duration-700"
                >
                  PRABHAT.
                </a>
              </li>
              <Navbar />
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
      </section> */}

      {/* <section> */}
      <main>
        <section className="z-5 w-full flex-col bg-header-banner bg-no-repeat">
          <div
            id="Home"
            className="flex h-screen w-1/2 flex-col flex-wrap items-center justify-start px-10 pt-24"
          >
            <h2 className="animate__animated  animate__pulse hero-text pt-20 pb-5 pr-16 font-catamaran text-4xl font-black uppercase text-white shadow-black drop-shadow-lg">
              Hey there ,<br></br> Welcome to my portfolio website .
            </h2>
            <h3 className="pb-5 font-poppins text-lg font-bold capitalize leading-6 text-white ">
              I'm <span className="text-amber-400 underline">Prabhat</span> , a
              Full-Stack MERN web developer with experties in Front-End webapp
              development.
            </h3>
            <h3 className="font-poppins text-lg font-bold capitalize leading-6 text-violet-200">
              This website holds information about my web development journey
              and the projects i have made till now.
            </h3>
          </div>
          <div id="About"></div>
          <div className="item-center flex h-screen w-full flex-col items-center justify-center py-20 px-40">
            {/* <h2 className="animate__animated animate__pulse pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800 pb-5">
              About
            </h2> */}
            <p className="h-full w-full rounded-xl bg-gray-300"></p>
          </div>
          <div id="Technologies"></div>
          <div className="item-center flex h-screen w-full justify-center bg-blue pt-24">
            <h2 className="animate__animated animate__pulse pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3  text-white">
              Technologies
            </h2>
          </div>
          <div id="Projects" ></div>
          <div className="item-center flex h-screen w-full justify-center pt-24">
            <h2 className="animate__animated animate__pulse pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3  text-indigo-800">
              Projects
            </h2>
          </div>
        </section>
      </main>
      {/* </section> */}

      <section>
        <footer></footer>
      </section>
    </>
  );
}

export default App;

// bg-gradient-to-r from-white to-orange-500
