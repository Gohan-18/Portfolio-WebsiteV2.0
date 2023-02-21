import "./App.css";
import "animate.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { About, Technologies, Projects, Contact } from './components/exports';
import { createContext, useState } from "react";

type filterProps = {
  activeFilter? : string,
  setActiveFilter? : any,
  toggle? : boolean,
  setToggle? : any,
  open? : boolean,
  setOpen? : any
}

export const AppContext = createContext<Partial<filterProps>>({})

function App() {

  const [activeFilter, setActiveFilter] = useState("");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  // let [urlAdd, setUrlAdd] = useState(window.location.href)

  // console.log(urlAdd)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
      // <>
      //   <Route path="/" element={<Layout />}>
      //     <Route index element={<Home/>} />
      //   </Route>
      //   <Route path="#About" element={<About />}/>
      // </>
    )
  );

  return (
    <>
      <AppContext.Provider value = {{activeFilter, setActiveFilter, toggle, setToggle, open, setOpen}} >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
}

export default App;

// bg-gradient-to-r from-white to-orange-500
