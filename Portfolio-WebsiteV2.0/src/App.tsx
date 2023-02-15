import "./App.css";

function App() {
  return (
    <>
      <section>
        <header className="header fixed flex w-full items-center justify-center rounded-b-xl px-10">
          <nav className="flex h-full w-full flex-wrap items-center justify-between">
            <ul className="flex h-full items-center justify-center gap-3">
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
                  href="index.html"
                  id="homeBtn"
                  className=" rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="index.html"
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
                  className="rounded font-poppins text-xs font-medium leading-3 transition-all duration-500 hover:bg-white hover:px-1.5 hover:py-0.5 hover:text-sm hover:font-semibold hover:text-indigo-800 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </section>

      {/* <section> */}
      <main>
        <section className="h-screen bg-header-banner ">
          <div className="vertical-center pt-24">
            <h2>Hey there, Welcome to my portfolio website.</h2>
            <h3>
              I'm Prabhat, an aspiring web developer who loves to code and make
              web apps.{" "}
            </h3>
            <h3>
              This website holds information about my web development journey
              and the projects i have made till now.
            </h3>
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
