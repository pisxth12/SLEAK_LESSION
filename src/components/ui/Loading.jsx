import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4"></div>

      {/* Text */}
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
};

export default Loading;
