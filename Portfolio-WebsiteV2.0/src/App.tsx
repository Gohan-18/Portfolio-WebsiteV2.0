import "./App.css";
import "animate.css";

function App() {
  return (
    <div>
      <section>
        <header className="header fixed z-20 flex w-full items-center justify-center px-10">
          <nav className="flex h-full w-full flex-wrap items-center justify-between ">
            <ul className="flex h-full items-center justify-center gap-3 border-b-2 pr-16">
              <li>
                <a
                  href="index.html"
                  className="border-r-2 border-solid pr-3 font-catamaran text-lg font-black leading-3 transition-all duration-700 hover:text-orange-300"
                >
                  PRABHAT.
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  id="homeBtn"
                  className="rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  id="aboutBtn"
                  className="rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  Projects
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#contact"
                  className="rounded border-2 px-1.5 py-0.5 font-poppins text-sm font-semibold leading-3 transition-all duration-500 hover:bg-white hover:text-indigo-800 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>

      {/* <section> */}
      <main >
        <section className="z-5 h-screen w-full flex-col bg-header-banner bg-no-repeat">
          <div
            id="home"
            className="flex h-full w-1/2 flex-col flex-wrap items-center justify-start px-10 pt-24"
          >
            <h2 className="animate__animated  animate__pulse hero-text pt-20 pb-5 font-catamaran text-4xl font-black uppercase text-white shadow-black drop-shadow-lg">
              Hey there,<br></br> Welcome to my portfolio website.
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
          <div id="about"></div>
          <div className="flex h-screen w-full item-center justify-center pt-24">
            <h2 className="uppercase font-catamaran text-3xl font-extrabold leading-3 text-indigo-800 pt-4 ">
              About
            </h2>
          </div>
          <div id="technologies"></div>
          <div className="flex h-screen w-full item-center justify-center pt-24 bg-blue">
            <h2 className="uppercase font-catamaran text-3xl font-extrabold leading-3 text-white pt-4 ">
              Technologies
            </h2>
          </div>
          <div id="projects"></div>
          <div className="flex h-screen w-full item-center justify-center pt-24">
            <h2 className="uppercase font-catamaran text-3xl font-extrabold leading-3 text-indigo-800 pt-4 ">
              Projects
            </h2>
          </div>
        </section>
      </main>
      {/* </section> */}

      <section>
        <footer></footer>
      </section>
    </div>
  );
}

export default App;

// bg-gradient-to-r from-white to-orange-500
