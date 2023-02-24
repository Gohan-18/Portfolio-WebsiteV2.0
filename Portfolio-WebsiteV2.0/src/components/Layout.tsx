import React, { useState } from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import About from './About'
import Socials from './Socials'

const Layout = () => {

  // const [activeFilter, setActiveFilter] = useState("");

  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        {/* <div className='absolute bottom-0 left-1' >
          <strong className='text-wht text-xxs font-poppins font-normal ' >
          © 2023 Prabhat | All rights reserved
          </strong>
        </div> */}
        <Socials/>
    </>
  )
}

export default Layout