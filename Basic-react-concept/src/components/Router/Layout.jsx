import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = () => {
  return (

    <>
    <div>Layout</div>
    <Header />
    <main>
      <Outlet />
    </main>

    <Footer />
    
    </>

    
  )
}

export default Layout