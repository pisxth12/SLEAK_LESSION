import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const UsersLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Link to="/">
        <button className='bg-blue-400 p-1 rounded-lg text-white text-center '>Home</button>
      </Link>
        <main className="flex-1">
             {children}
        </main>
        
    </div>
  )
}

export default UsersLayout