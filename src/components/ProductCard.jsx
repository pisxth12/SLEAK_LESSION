import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-3 ">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-44 object-contain"
      />

      <div className="mt-3">
        <h4 className="text-sm font-semibold line-clamp-2">
          {product.title}
        </h4>

        <p className="text-xs text-gray-500 mt-1">
          {product.category}
        </p>

        <p className="text-base font-bold mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  )
}

export default ProductCard;
