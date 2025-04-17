"use client";

import React from "react";
import { navItems } from "@/data/NavbarData";

const MobileNav = ({ isMobileMenuOpen, toggleMobileMenu, handleLinkClick }) => {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black"
        onClick={toggleMobileMenu}
      />
      
      <div className="relative h-full w-full flex flex-col bg-black">
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-black">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:text-[#d8ad63]"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(item.href)}
                className="text-white text-lg py-3 hover:text-[#d8ad63] transition"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <a
              href="tel:+919756705659"
              className="flex items-center justify-center text-[#d8ad63] space-x-2 py-3"
            >
              <span>📞</span>
              <span>+91 97567 05659</span>
            </a>
            <a
              href="/special-offers"
              className="block w-full bg-[#d8ad63] hover:bg-[#c24e28] text-white text-center py-3 rounded-lg mt-4 transition"
            >
              View Offers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;