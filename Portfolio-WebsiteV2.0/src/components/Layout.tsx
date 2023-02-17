import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import About from './About'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout