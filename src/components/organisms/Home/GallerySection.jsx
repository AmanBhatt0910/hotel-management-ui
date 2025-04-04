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
    <section id="gallery" className="py-20 bg-[#f7ede2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#c24e28] tracking-wide">
          Gallery
        </h2>

        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#f1e6da]">
          <div className="max-w-full h-[450px] md:h-[550px] overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
            />
          </div>

          <button
            onClick={previousImage}
            className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/60 text-[#c24e28] p-4 rounded-full hover:bg-[#d8ad63] hover:text-white shadow-md transition-all duration-300"
          >
            &lt;
          </button>

          <button
            onClick={nextImage}
            className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/60 text-[#c24e28] p-4 rounded-full hover:bg-[#d8ad63] hover:text-white shadow-md transition-all duration-300"
          >
            &gt;
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  currentImageIndex === index ? "bg-[#c24e28]" : "bg-[#d8ad63]"
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
