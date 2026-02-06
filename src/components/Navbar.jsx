
import { User ,  } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const { cart } = useCart();

  const totalQty = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

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
          
            <Link to={`/users`}>
              <User/>
            </Link>
        
          <li className="cursor-pointer hover:text-gray-500">About</li>
        </ul>

       <div className="flex justify-between items-center gap-3">
        {/* Cart icon */}
        <div className="relative font-bold ">
            Cart ({totalQty})
        </div>



        {/* Right action */}
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
          Login
        </button>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
