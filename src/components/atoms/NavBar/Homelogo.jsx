import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeLogo = () => {
  return (
    <div className="flex justify-center py-3 bg-[#fff8f3]">
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <Image src="/logo_bg.png" alt="Parth Hotel" width={140} height={50} className="w-auto" />
        </a>
      </Link>
    </div>
  );
};

export default HomeLogo;
