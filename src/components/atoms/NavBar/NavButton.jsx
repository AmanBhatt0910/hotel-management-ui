// NavButton.jsx
import React from 'react';
import Link from 'next/link';

const NavButton = ({ href, text, className }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={`py-2 px-4 ${className}`}>{text}</a>
    </Link>
  );
};

export default NavButton;
