import React, { useState } from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import About from './About'

const Layout = () => {

  // const [activeFilter, setActiveFilter] = useState("");

  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout