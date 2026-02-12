import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const {  addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  },[id]);

  if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-center text-xl font-semibold">Loading product...</p>
    </div>
  );
}


  if (!product) {
    return <p className="text-center mt-10 text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
      
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full max-w-md h-96 object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product?.price}</p>
          <p className="text-gray-700 mb-6">{product?.description}</p>
        </div>

        {/* Add to Cart */}
        <button onClick={() => addToCart(product)}className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
