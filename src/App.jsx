import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])


  const fetchProductsFromFakeStoreApi = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
     
      setProducts(response.data)
  }

  



  useEffect(() => {
  fetchProductsFromFakeStoreApi();
},[])


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4`}>
        {products.map(product => (
          <li
            key={product.id}
            className={`bg-white rounded-lg shadow hover:shadow-lg transition p-3 ${product.id % 2 ? "bg-red-700" : "bg-blue-600"}`} 
          >
            <span>{product.id}</span>
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-contain mb-2"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>

            <div className="mt-2 flex justify-between items-center">
              <span className="font-bold text-blue-600">
                ${product.rating.count}
              </span>
              <span className="text-sm">
                ⭐ {product.rating.rate}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
