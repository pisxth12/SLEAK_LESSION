import React from 'react'

const Error = ({error}) => {
  return (
     <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="text-red-500 text-4xl mb-4">⚠️</div>
      <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
      <p className="text-gray-600 text-sm mb-4">{error}</p>

   
    </div>
  )
}

export default Error