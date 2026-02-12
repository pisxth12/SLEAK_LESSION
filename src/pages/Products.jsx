import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Products = () => {
    const [products, setproducts] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useCart();


    useEffect(() => {
        fetchProduct();
    }, [])

    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setproducts(data);
    }

  return (
    <>
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center justify-center my-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-2"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-red-600 font-bold mt-1 text-lg">${product.price}</p>
            <div className="mt-4">
                <button onClick={() => navigate(`/product/${product.id}`)} className="bg-gray-950 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition w-full md:w-auto mr-4 my-2">View Details</button>
                <button onClick={() => addToCart(product)} className="bg-gray-950 text-white py-3 px-6 rounded-lg font-bold hover:bg-gray-800 transition w-full md:w-auto">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Products