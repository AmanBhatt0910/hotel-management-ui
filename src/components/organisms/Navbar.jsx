"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import HomeLogo from "@/components/atoms/NavBar/Homelogo";
import NavButton from "../atoms/NavBar/NavButton";
import { navItems } from "@/data/NavbarData";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleClickOutside = (e) => {
    if (e.target.closest(".mobile-menu") || e.target.closest(".mobile-menu-button")) return;
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg pt-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          <div className="transform transition duration-300 hover:scale-105">
            <HomeLogo name="Parth Hotel" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(item.href)}
                className="relative text-gray-300 hover:text-orange-500 transition duration-300 group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavButton
              href="/login"
              text="Login"
              className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105"
            />
            <NavButton
              href="/signup"
              text="Signup"
              className="py-2 px-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          <div className="md:hidden">
            <button
              className="mobile-menu-button transform transition duration-300 hover:rotate-90"
              onClick={toggleMobileMenu}
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`mobile-menu fixed inset-0 z-50 bg-gray-800 bg-opacity-90 p-5 transform transition-all duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-4">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-300 hover:text-orange-500"
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

          <div className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(item.href)}
                className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105"
              >
                {item.label}
              </button>
            ))}

            <NavButton
              href="/login"
              text="Login"
              className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105"
            />
            <NavButton
              href="/signup"
              text="Signup"
              className="py-2 px-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClickOutside}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
