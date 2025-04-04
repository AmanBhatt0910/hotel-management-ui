"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      className="relative h-[90vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Home/bg-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-4 drop-shadow-xl">
        Discover <span className="text-[#d8ad63]">Elegance</span><br />
        at <span className="text-[#e85a4f]">Parth Hotel</span>
      </h1>


        <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-10 text-white/90">
          Enjoy a stay filled with comfort, tranquility, and heartfelt hospitality.
        </p>

        <a
          href="/contact"
          className="flex items-center gap-3 px-8 py-4 text-lg bg-[#c24e28] text-white font-semibold rounded-full shadow-xl hover:bg-[#a63e22] transition duration-300 hover:scale-105"
        >
          Book Now <FaArrowRight className="mt-[2px]" />
        </a>

        <div className="flex items-center justify-center mt-12 space-x-6 text-sm md:text-base text-white/80 bg-black/30 px-8 py-3 rounded-full shadow-md backdrop-blur-sm">
          <a href="#gallery" className="hover:text-white transition">📸 Gallery</a>
          <span>•</span>
          <a href="#services" className="hover:text-white transition">🛎️ Services</a>
          <span>•</span>
          <a href="#faq" className="hover:text-white transition">❓ FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
