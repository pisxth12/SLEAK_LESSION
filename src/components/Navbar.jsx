
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
   
  return (
    <nav className="bg-black/90 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              Hehe
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/products" className="hover:text-gray-200">
              Products
            </Link>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="hover:text-gray-200 relative">
              🛒 Cart
            <span className="bg-red-500 rounded-full absolute -top-3 -right-2 h-4 w-4 flex items-center justify-center text-xs text-white">0</span>
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;