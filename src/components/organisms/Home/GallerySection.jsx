"use client";

import React, { useState } from "react";

const GallerySection = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
          Gallery
        </h2>
        <div className="relative">
          <div className="max-w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-md">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition duration-500 ease-in-out transform hover:scale-110"
            />
          </div>

          {/* Previous Button */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-300 transition duration-300"
            onClick={previousImage}
          >
            &lt;
          </button>

          {/* Next Button */}
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-md text-gray-800 hover:bg-gray-300 transition duration-300"
            onClick={nextImage}
          >
            &gt;
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentImageIndex === index ? "bg-orange-500" : "bg-gray-400"
                } transition duration-300`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
