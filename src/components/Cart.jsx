import React from "react";
import { useCart } from "../hooks/useCart";

const Cart = () => {
    const { cart} = useCart();
  // Mock product data
  

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-start transition gap-1"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="font-semibold text-left">{product.title}</h2>
            <p className="font-semibold">Quantity: {product.quantity}</p>
            <p className="text-red-600 font-bold">Price: ${product.price}</p>
            <div className="flex justify-center gap-4 w-full mt-4">
              <button className="font-bold rounded shadow hover:shadow-lg px-4 py-2 bg-black/80 text-white ">Add</button>
              <button className="font-bold rounded shadow hover:shadow-lg px-4 py-2 bg-black/80 text-white ">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
