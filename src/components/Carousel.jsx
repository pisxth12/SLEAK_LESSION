
import React, { useState } from "react";



const Carousel = ({ carouselImages: images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    setCurrentIndex((prev) =>(prev === 0 ? images.length - 1 : prev -1 ))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full  mx-auto">
      <img
        src={images[currentIndex]}
        alt={`banner-${currentIndex}`}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
