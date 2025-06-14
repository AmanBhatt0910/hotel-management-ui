'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed with:', email);
    setEmail('');
    // Add actual implementation here
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <div className="mb-4">
                <Image 
                  src="/home-logo.jpeg" 
                  alt="Parth Hotel and Restaurant" 
                  width={120} 
                  height={60} 
                  className="h-16 w-auto rounded-lg"
                />
              </div>
            </Link>
            <p className="text-gray-400">
              Experience luxury and comfort at Parth Hotel and Restaurant, where every stay is memorable.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-parth-pink transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-parth-pink transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-parth-pink transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-white transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/restaurant" className="text-gray-400 hover:text-white transition-colors">
                  Restaurant
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-white transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FiMapPin className="mr-2 mt-1 text-parth-pink" />
                <span>Pande Toli, Almora, India, 263601</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-2 text-parth-pink" />
                <span>+91 9557884358</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-parth-pink" />
                <span>info@parthhotel.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates</p>
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                required
                className="p-2 rounded-l-md flex-grow focus:outline-none focus:ring-2 focus:ring-parth-pink text-gray-800" 
              />
              <button 
                type="submit"
                className="bg-parth-pink text-white p-2 rounded-r-md hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Parth Hotel and Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}