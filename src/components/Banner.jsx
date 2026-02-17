import React, { useState, useEffect } from 'react';

const Banner = () => {
  // Mock data for 3 images
  const mockImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
      alt: 'Fashion store banner',
      title: 'Summer Collection 2024',
      description: 'Discover the latest trends',
      cta: 'Shop Now',
      ctaLink: '/summer-collection'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop',
      alt: 'Electronics sale banner',
      title: 'Tech Week Sale',
      description: 'Up to 40% off on electronics',
      cta: 'View Deals',
      ctaLink: '/tech-sale'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop',
      alt: 'Home decor banner',
      title: 'Home Makeover',
      description: 'Transform your space',
      cta: 'Explore',
      ctaLink: '/home-decor'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? mockImages.length - 1 : prev - 1));
  };

  return (
    <div className="w-full  mx-auto ">
      {/* Banner Container */}
      <div className="relative w-full h-[400px] overflow-hidden shadow-xl">
        
        {/* Images */}
        {mockImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-white ml-8 md:ml-16 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {image.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 text-gray-200">
                  {image.description}
                </p>
                <a
                  href={image.ctaLink}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {image.cta}
                  <svg 
                    className="w-5 h-5 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {mockImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-10">
          {currentSlide + 1} / {mockImages.length}
        </div>
      </div>
    </div>
  );
};

export default Banner;