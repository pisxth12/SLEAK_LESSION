import React, { useState, useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';

const FeaturedProducts = () => {

  const { products, loading, error} = useProducts();
  
  // Loading Skeleton
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong</h2>
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our hand-picked selection of top-rated products
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full uppercase">
                {product.category}
              </span>

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm font-semibold text-gray-700">
                  {product.rating?.rate || '4.5'}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
                {product.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Price and Action */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.rating?.count > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      {product.rating.count} sold
                    </p>
                  )}
                </div>
                
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

            {/* Quick View Hover Effect */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button 
          onClick={() => window.location.href = '/products'} 
          className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 font-semibold">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;