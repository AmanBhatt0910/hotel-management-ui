'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page is home page
  const isHomePage = pathname === '/';

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine navbar styling based on page and scroll state
  const getNavbarStyle = () => {
    if (isHomePage) {
      // Home page: always white background since page background is white
      return 'bg-white shadow-md py-2 sm:py-3';
    } else {
      // Other pages: transparent when not scrolled, white when scrolled
      return isScrolled ? 'bg-white shadow-md py-2 sm:py-3' : 'bg-transparent py-3 sm:py-4';
    }
  };

  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (isHomePage) {
      // Home page: always dark text since navbar is always white
      return 'text-gray-800';
    } else {
      // Other pages: white text when transparent, dark when scrolled
      return isScrolled ? 'text-gray-800' : 'text-white';
    }
  };

  // Determine mobile menu button color
  const getMobileButtonColor = () => {
    if (isHomePage) {
      return 'text-[var(--parth-pink)]';
    } else {
      return isScrolled ? 'text-[var(--parth-pink)]' : 'text-white';
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarStyle()}`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="block">
            <Image 
              src="/home-logo.jpeg" 
              alt="Parth Hotel and Restaurant" 
              width={100} 
              height={50} 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto rounded-lg hover:opacity-90 transition-opacity duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-4 lg:space-x-8 transition-colors duration-300 ${getTextColor()}`}>
          <NavLink href="/" isHomePage={isHomePage} isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="/rooms" isHomePage={isHomePage} isScrolled={isScrolled}>Rooms</NavLink>
          <NavLink href="/restaurant" isHomePage={isHomePage} isScrolled={isScrolled}>Restaurant</NavLink>
          <NavLink href="/about" isHomePage={isHomePage} isScrolled={isScrolled}>About</NavLink>
          <NavLink href="/contact" isHomePage={isHomePage} isScrolled={isScrolled}>Contact</NavLink>
        </div>

        {/* Book Now Button - Desktop */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="/booking">
            <button className="bg-[var(--parth-pink)] text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md text-sm lg:text-base">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors duration-300 p-2 ${getMobileButtonColor()}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg relative z-50 border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
                <MobileNavLink href="/rooms" onClick={toggleMenu}>Rooms</MobileNavLink>
                <MobileNavLink href="/restaurant" onClick={toggleMenu}>Restaurant</MobileNavLink>
                <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
                <MobileNavLink href="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/booking" onClick={toggleMenu}>
                    <button className="bg-[var(--parth-pink)] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md w-full">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Component for desktop navigation links
function NavLink({ href, children, isHomePage, isScrolled }) {
  const getHoverColor = () => {
    if (isHomePage) {
      return 'text-gray-800 hover:text-[var(--parth-pink)]';
    } else {
      return isScrolled 
        ? 'text-gray-800 hover:text-[var(--parth-pink)]' 
        : 'text-white hover:text-[var(--parth-pink)]';
    }
  };

  return (
    <Link 
      href={href}
      className={`font-medium transition-colors duration-300 text-sm lg:text-base ${getHoverColor()}`}
    >
      {children}
    </Link>
  );
}

// Component for mobile navigation links
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-800 font-medium py-3 hover:text-[var(--parth-pink)] transition-colors block text-lg border-b border-gray-100 last:border-b-0"
    >
      {children}
    </Link>
  );
}