import React from 'react'
import { useProducts } from '../hooks/useProducts';
import Loading from './ui/Loading';
import Error from './ui/Error';
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, loading, error} = useProducts();
    const { addToCart , removeFromCart} = useCart();

    const product = products.find(p=> p.id === parseInt(id));



    if(loading) return <Loading/>;
    if(error) return <Error error={error}/>
    

  return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center">
        <img
          src={product?.image}
          alt={product?.title}
          className="h-96 object-contain"
        />
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product?.title}</h1>

        <p className="text-gray-500 capitalize">
          Category: {product?.category}
        </p>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-semibold text-green-600">
            ${product?.price}
          </span>
          <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            ⭐ {product?.rating.rate} / 5
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {product?.description}
        </p>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <button onClick={()=> addToCart(product)} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Add to Cart
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail