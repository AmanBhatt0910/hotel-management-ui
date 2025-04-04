"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HomeLogo from "@/components/atoms/NavBar/Homelogo";
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
    <div className="w-full">
      <HomeLogo />

      <nav className="sticky top-0 z-50 bg-[#fff8f3] backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(item.href)}
                  className="relative text-[#c24e28] hover:text-[#d8ad63] font-semibold transition group text-base tracking-wide"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#d8ad63] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+919756705659" className="text-[#c24e28] font-semibold text-base flex items-center space-x-2 hover:text-[#a53d1f] transition">
                📞 <span>+91 97567 05659</span>
              </a>
              <a href="/special-offers" className="bg-[#d8ad63] text-white px-4 py-2 text-sm rounded-full shadow-md hover:bg-[#b99352] transition">
                View Offers
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="transition hover:rotate-90">
                <svg
                  className="w-7 h-7 text-[#c24e28]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          handleLinkClick={handleLinkClick}
        />
      </nav>
    </div>
  );
};

export default Navbar;
