import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] md:h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/Home/mountain-image.jpg')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg">Welcome to Parth Hotel</h1>
        <p className="text-lg md:text-xl mb-8">Experience the tranquility of the mountains</p>
        <a href="#booking" className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">Book Now</a>
        <div className="mt-8 text-gray-300 text-sm">Discover more about our amenities and services below</div>
        <div className="flex items-center justify-center mt-8 space-x-4 text-gray-300">
          <a href="#gallery" className="hover:text-white transition duration-300">Gallery</a>
          <span className="text-gray-400">•</span>
          <a href="#services" className="hover:text-white transition duration-300">Services</a>
          <span className="text-gray-400">•</span>
          <a href="#faq" className="hover:text-white transition duration-300">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
