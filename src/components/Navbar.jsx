import { User, Menu, X, ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
 
  const { cart , removeFromCart: removeItem} = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalItem = cart.length;

  return (
    <nav className="w-full bg-white border-b sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          LE<span className="text-black">AK</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-500">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500">
            <Link to="/users">
              <User />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-500">
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Cart & Login */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative font-bold flex items-center gap-1">
            <ShoppingCart size={20} />
            Cart ({totalItem})
          </div>
          <div className="relative font-bold">Items ({totalQty})</div>
          <Link to="/login">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center  gap-3">
          <button onClick={() => setShoppingCartOpen(!shoppingCartOpen)} className="relative font-bold ">
            <ShoppingCart/>
            <span className="absolute bg-red-600 w-5 h-5 rounded-full -top-2 left-3 text-sm text-white flex items-center justify-center">{totalQty}</span>
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      <div
  className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-40 transform transition-transform duration-300 flex flex-col ${
    shoppingCartOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex justify-between items-center p-4 border-b">
    <h2 className="font-bold text-lg">Shopping Cart</h2>
    <button
      onClick={() => setShoppingCartOpen(false)}
      className="hover:text-red-500 transition"
    >
      <X size={24} />
    </button>
  </div>

  {/* Cart Items */}
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    {cart.length === 0 ? (
      <div className="text-gray-500 text-center mt-10">Your cart is empty</div>
    ) : (
      cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 border-b pb-2"
        >
          {/* Product Info */}
          <div className="flex items-center gap-3">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-contain rounded"
            />
            <div className="flex flex-col">
              <span className="font-semibold">{item.title}</span>
              <span className="text-sm text-gray-500">
                ${item.price} x {item.quantity}
              </span>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item)}
            className="text-red-500 hover:text-red-700 transition font-bold"
          >
            Remove
          </button>
        </div>
      ))
    )}
  </div>

  {/* Cart Total */}
  {cart.length > 0 && (
    <div className="p-4 border-t space-y-2">
      <div className="flex justify-between font-semibold text-lg">
        <span>Total:</span>
        <span>
          $
          {cart
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}
        </span>
      </div>
      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
        Checkout
      </button>
    </div>
  )}
</div>

{/* Overlay */}
{shoppingCartOpen && (
  <div
    className="fixed inset-0 bg-black opacity-30 z-30"
    onClick={() => setShoppingCartOpen(false)}
  />
)}



      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4 text-sm font-medium">
          <li>
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" onClick={() => setSidebarOpen(false)}>
              <User className="inline mr-1" />
              Users
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setSidebarOpen(false)}>
              About
            </Link>
          </li>
        </ul>

        <div className="p-4 border-t flex flex-col gap-3">
          <div className="flex items-center gap-2 font-bold">
            <ShoppingCart size={18} /> Cart ({totalItem})
          </div>
          <div className="font-bold">Items ({totalQty})</div>
          <Link to="/login" onClick={() => setSidebarOpen(false)}>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition w-full">
              Login
            </button>
          </Link>
        </div>
      </div>



      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
