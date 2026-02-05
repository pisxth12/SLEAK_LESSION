import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      <h4 className="text-sm font-semibold line-clamp-2 mb-2">
        {product.title}
      </h4>

      <p className="text-lg font-bold mb-4">${product.price}</p>

      <button className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        View
      </button>
    </div>
  );
};

export default ProductCard;
