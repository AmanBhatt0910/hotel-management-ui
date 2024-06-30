import React from 'react';
import PrimaryNav from '../atoms/NavBar/PrimaryNav';
import HomeLogo from "@/components/atoms/NavBar/Homelogo";
import NavButton from '../atoms/NavBar/NavButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">̥
        <div className="flex justify-between items-center py-4">
          <HomeLogo name="Parth Hotel" />

          <PrimaryNav />

          <div className="hidden md:flex items-center space-x-4">
            <NavButton href="/login" text="Login" className="text-gray-300 hover:text-orange-500 transition duration-300" />
            <NavButton href="/signup" text="Signup" className="py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-400 transition duration-300" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6 text-gray-300 hover:text-orange-500 transition duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
