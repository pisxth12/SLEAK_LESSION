import React, { useContext } from 'react'
import { useProduct } from '../context/ProductContext'

const Navbar = () => {
    const { count } = useProduct();
  return (
     <div className="p-4 bg-black text-white flex justify-between">
      <h1>My Shop</h1>
      <span>🛒 Cart: {count}</span>
    </div>
  )
}

export default Navbar
