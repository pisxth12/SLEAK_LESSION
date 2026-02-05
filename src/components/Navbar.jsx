import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          LE<span className="text-black">AK</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Products</li>
          <li className="cursor-pointer hover:text-gray-500">About</li>
        </ul>

        {/* Right action */}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
