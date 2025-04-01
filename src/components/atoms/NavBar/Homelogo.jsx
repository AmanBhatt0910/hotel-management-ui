import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeLogo = (props) => {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a className="flex items-center">         
            <Image src="/logo_bg.png" alt="Parth Website" width={100} height={40} className="w-auto" />
          {/* <span className="text-gray-300 text-lg font-semibold ml-2 hover:text-orange-500 transition duration-300">{props.name}</span> */}
        </a>
      </Link>
    </div>
  );
};

export default HomeLogo;
