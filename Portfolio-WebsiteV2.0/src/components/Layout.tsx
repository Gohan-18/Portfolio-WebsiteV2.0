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
        <Socials/>
    </>
  )
}

export default Layout