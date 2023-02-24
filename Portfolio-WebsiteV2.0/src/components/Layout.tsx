import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import About from './About'
import Socials from './Socials'
import { AppContext } from '../App'

const Layout = () => {

  // const [activeFilter, setActiveFilter] = useState("");
  const { activeFilter } = useContext(AppContext);


  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        {/* <div className='fixed bottom-16 -left-14 hidden md:flex rounded-sm -rotate-90' >
          <strong className={`text-xxs font-poppins font-normal ${activeFilter === 'Contact' ? "text-dark-blue" : "text-wht"} `} >
          © 2023 Prabhat | All rights reserved
          </strong>
        </div> */}
        <Socials/>
    </>
  )
}

export default Layout