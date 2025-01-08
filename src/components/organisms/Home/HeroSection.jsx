import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative h-[85vh] md:h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/Home/mountain-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Welcome to Parth Hotel
        </h1>
        <p className="text-lg md:text-xl mb-8">Experience the tranquility of the mountains</p>
        
        {/* Button with Radial Glow on Hover */}
        <a
          href="#booking"
          className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Now
        </a>

        {/* Information Text Box */}
        <div className="mt-8 text-sm bg-gray-900/70 px-4 py-2 rounded-lg text-gray-200 shadow-md">
          Discover more about our amenities and services below
        </div>

        {/* Link Glow on Hover */}
        <div className="flex items-center justify-center mt-8 space-x-4 bg-gray-900/70 px-4 py-2 rounded-lg text-gray-200 shadow-md">
          <a
            href="#gallery"
            className="hover:text-white transition duration-300"
            style={{ textShadow: '0 0 5px rgba(255,255,255,0.8)' }}
          >
            Gallery
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="#services"
            className="hover:text-white transition duration-300"
            style={{ textShadow: '0 0 5px rgba(255,255,255,0.8)' }}
          >
            Services
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="#faq"
            className="hover:text-white transition duration-300"
            style={{ textShadow: '0 0 5px rgba(255,255,255,0.8)' }}
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
