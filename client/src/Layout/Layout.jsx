import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    <nav>
        <Header/>
    </nav>

    <main>
        <Outlet/>
    </main>

    <footer>
        <Footer/>
    </footer>
    
    </>
  )
}

export default Layout
