import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Header'

const Layout = () => {
  return (
    <>
    <nav>
        <Navbar/>
    </nav>

    <main className='px-2 md:px-5'>
        <Outlet/>
    </main>

    <footer>
        <Footer/>
    </footer>
    
    </>
  )
}

export default Layout
