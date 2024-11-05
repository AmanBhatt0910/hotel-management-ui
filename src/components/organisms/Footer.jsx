import React from 'react';

import FooterLogo from '../atoms/Footer/FooterLogo';
import FooterNavigation from '../atoms/Footer/FooterNavigation';
import SocialMedia from '../atoms/Footer/SocialMedia';
import FooterContact from '../atoms/Footer/FooterContact';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLogo heading="Parth Hotel" description="Your destination for a comfortable and luxurious stay." />

          <FooterNavigation heading="Quick Links" />

          <FooterContact />

          <SocialMedia heading="Follow Us" />
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} Parth Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
