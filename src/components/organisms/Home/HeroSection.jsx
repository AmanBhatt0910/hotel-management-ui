"use client";

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const welcomeTexts = ["Welcome to", "Explore", "Relax at"];
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = welcomeTexts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 125);
      return () => clearTimeout(typingTimeout);
    } else if (isDeleting && charIndex > 0) {
      const deletingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50);
      return () => clearTimeout(deletingTimeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % welcomeTexts.length);
    }
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div
      className="relative h-[85vh] md:h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/Home/mountain-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {text}
          <span className="animate-pulse">|</span>
          <span> Parth Hotel</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">Experience the tranquility of the mountains</p>
        
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Book Now
        </a>

        <div className="mt-8 text-sm bg-gray-900/70 px-4 py-2 rounded-lg text-gray-200 shadow-md">
          Discover more about our amenities and services below
        </div>

        <div className="flex items-center justify-center mt-8 space-x-4 bg-gray-900/70 px-4 py-2 rounded-lg text-gray-200 shadow-md">
          <a
            href="#gallery"
            className="hover:text-white transition duration-300"
            style={{ textShadow: "0 0 5px rgba(255,255,255,0.8)" }}
          >
            Gallery
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="#services"
            className="hover:text-white transition duration-300"
            style={{ textShadow: "0 0 5px rgba(255,255,255,0.8)" }}
          >
            Services
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="#faq"
            className="hover:text-white transition duration-300"
            style={{ textShadow: "0 0 5px rgba(255,255,255,0.8)" }}
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
