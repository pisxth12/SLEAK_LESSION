import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='h-screen flex justify-between flex-col'>
        <Navbar/>
           <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout