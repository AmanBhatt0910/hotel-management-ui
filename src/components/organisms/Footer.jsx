"use client"

import React, { useState, useEffect } from 'react';
import FooterLogo from '../atoms/Footer/FooterLogo';
import FooterNavigation from '../atoms/Footer/FooterNavigation';
import SocialMedia from '../atoms/Footer/SocialMedia';
import FooterContact from '../atoms/Footer/FooterContact';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 relative shadow-inner">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLogo heading="Parth Hotel" description="Your destination for a comfortable and luxurious stay." />

          <FooterNavigation heading="Quick Links" />

          <FooterContact />

          <SocialMedia heading="Follow Us" />
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Parth Hotel. All rights reserved.
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-400 transition duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
