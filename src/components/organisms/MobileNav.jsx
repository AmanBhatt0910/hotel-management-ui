"use client";

import React from "react";
import NavButton from "../atoms/NavBar/NavButton";
import { navItems } from "@/data/NavbarData";

const MobileNav = ({ isMobileMenuOpen, toggleMobileMenu, handleLinkClick }) => {
  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 p-5 mobile-menu"
        >
          <div className="flex justify-end mb-4">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-300 hover:text-orange-500 transition duration-300"
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

          <div className="flex flex-col items-center space-y-6 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                onClick={() => handleLinkClick(item.href)}
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105 cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            <div className="w-full border-t border-gray-600 my-4"></div>

            <NavButton
              href="/login"
              text="Login"
              className="w-full text-center py-2 text-lg font-medium text-gray-300 border border-gray-500 rounded-md hover:text-orange-500 hover:border-orange-500 transition duration-300 transform hover:scale-105"
            />
            <NavButton
              href="/signup"
              text="Signup"
              className="w-full text-center py-2 text-lg font-medium bg-orange-500 text-white rounded-md shadow-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default MobileNav;