"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HomeLogo from "../atoms/NavBar/Homelogo";
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
    <header className={`sticky top-0 z-40 bg-white/60 backdrop-blur-lg shadow-md transition-all`}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <HomeLogo />

        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(item.href)}
              className="relative text-[#c24e28] hover:text-[#d8ad63] font-medium transition group text-base tracking-wide"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d8ad63] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:+919756705659"
            className="text-[#c24e28] font-semibold text-sm flex items-center space-x-2 hover:text-[#a53d1f] transition"
          >
            📞 <span>+91 97567 05659</span>
          </a>
          <a
            href="/special-offers"
            className="bg-[#d8ad63] hover:bg-[#b99352] text-white px-4 py-2 rounded-full shadow-md transition-all text-sm"
          >
            View Offers
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="transition hover:scale-110 focus:outline-none"
          >
            <svg
              className="w-7 h-7 text-[#c24e28]"
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

      <MobileNav
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        handleLinkClick={handleLinkClick}
      />
    </header>
  );
};

export default Navbar;
