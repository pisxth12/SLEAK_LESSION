import React from "react";

const HeroSection = () => {
  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-10">

        {/* Left content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Discover Our <span className="text-indigo-600">Exclusive Products</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Shop the latest trends in fashion, electronics, and more.  
            Limited edition collections available now!
          </p>
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Shop Now
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2">
          <img
            src="https://zandokh.com/image/catalog/assets/app/app-zando-logo.png"
            alt="Hero"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
