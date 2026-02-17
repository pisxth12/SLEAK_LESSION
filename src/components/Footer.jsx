// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYears = new Date().getFullYear();

  const age = currentYears - 2006;
  
  return (
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-bold mb-2">MyShop</h1>
            <p className="text-gray-400">© {age} MyShop. All rights reserved.</p>
          </div>

          {/* Center Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <div className="flex flex-col space-y-1">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/products" className="hover:text-gray-300">Products</Link>
              <Link to="/about" className="hover:text-gray-300">About</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>

          {/* Right Socials */}
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">🐦 Twitter</a>
              <a href="#" className="hover:text-gray-300">📘 Facebook</a>
              <a href="#" className="hover:text-gray-300">📸 Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;