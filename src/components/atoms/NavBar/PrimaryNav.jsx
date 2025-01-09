import React from 'react';
import { navItems } from '@/data/NavbarData';
import Link from 'next/link';

const PrimaryNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item, index) => (
        <Link href={item.href} key={index} passHref legacyBehavior>
          <a className="relative text-gray-300 hover:text-orange-500 transition duration-300 group">
            {item.label}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PrimaryNav;
