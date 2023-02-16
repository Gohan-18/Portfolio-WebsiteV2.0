import "./App.css";
import "animate.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Layout from "./components/Layout";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        {/* <Route path='Home' element={<Home/>} /> */}
        <Route path="About" element={<About />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
      {/* <section> */}
      {/* <main> */}
        {/* <Header /> */}

        {/* <div id="About"></div>
          <div className="item-center flex h-screen w-full flex-col items-center justify-center py-20 px-40">
            <h2 className="animate__animated animate__pulse pt-4 font-catamaran text-3xl font-extrabold uppercase leading-3 text-indigo-800 pb-5">
              About
            </h2>
            <p className="h-full w-full rounded-xl bg-gray-300"></p>
          </div> */}

        {/* <div id="Technologies"></div>
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
          </div> */}
      {/* </main> */}
      {/* </section> */}

      {/* <section>
        <footer></footer>
      </section> */}
    </>
  );
}

export default App;

// bg-gradient-to-r from-white to-orange-500
