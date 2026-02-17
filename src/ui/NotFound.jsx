import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest">
          404
        </h1>
        <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          Page Not Found
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Lost in Space?
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;