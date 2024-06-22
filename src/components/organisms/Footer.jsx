"use client"

import React from 'react';
import Link from 'next/link';
import { footerNavItems } from '@/data/FooterNavItems';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <Image src="/logo.png" alt="Parth Hotel" width={120} height={40} className="h-12 w-auto" />
                <span className="text-lg font-semibold ml-2">Parth Hotel</span>
              </a>
            </Link>
            <p className="mt-2 text-gray-400 text-center">
              Your destination for a comfortable and luxurious stay.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            {/* Responsive grid for quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4 text-center">
              {footerNavItems.map((item, index) => (
                <Link href={item.href} key={index} passHref legacyBehavior>
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 text-center">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-400 text-center">Phone: (123) 456-7890</p>
            <p className="text-gray-400 text-center">Email: info@parthhotel.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Image src="/Footer/whatsapp-icon.png" alt="Whatsapp" width={24} height={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Image src="/Footer/facebook-icon.png" alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Image src="/Footer/instagram-icon.png" alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Image src="/Footer/youtube-icon.png" alt="Youtube" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Parth Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
