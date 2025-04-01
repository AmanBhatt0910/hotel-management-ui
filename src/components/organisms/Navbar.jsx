"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HomeLogo from "@/components/atoms/NavBar/Homelogo";
import NavButton from "../atoms/NavBar/NavButton";
import { navItems } from "@/data/NavbarData";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    router.push(href);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#f0d9bc] shadow-md pt-4 pb-3">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-2">
          <div className="transform transition duration-300 hover:scale-105">
            <HomeLogo name="Parth Hotel" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(item.href)}
                className="relative text-black hover:text-[#c41c2f] transition duration-300 group text-lg"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#c41c2f] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <NavButton
              href="/login"
              text="Login"
              className="text-[#c41c2f] border-2 border-[#c41c2f] px-5 py-2 rounded-full hover:bg-[#c41c2f] hover:text-white transition duration-300 transform hover:scale-105"
            />
            <NavButton
              href="/signup"
              text="Signup"
              className="py-2 px-5 bg-[#c41c2f] text-white rounded-full shadow-lg hover:bg-red-800 transition duration-300 transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          <div className="md:hidden">
            <button
              className="mobile-menu-button transform transition duration-300 hover:rotate-90"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-7 h-7 text-gray-500 hover:text-[#c41c2f] transition duration-300"
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
      <hr className="border-t-1 border-gray-600 my-2" />
      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleLinkClick={handleLinkClick}
      />
    </nav>
  );
};

export default Navbar;