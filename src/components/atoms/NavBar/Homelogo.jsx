import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Homelogo = (props) => {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a className="flex items-center">
          <Image src="/logo.png" alt="Parth Website" width={120} height={40} className="h-12 w-auto" />
          <span className="text-gray-800 text-lg font-semibold ml-2">{props.name}</span>
        </a>
      </Link>
    </div>
  )
}

export default Homelogo;