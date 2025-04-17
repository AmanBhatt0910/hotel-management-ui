"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_bg.png"
        alt="Parth Hotel"
        width={120}
        height={40}
        className="w-auto h-auto object-contain mt-2"
        priority
      />
    </Link>
  );
};

export default HomeLogo;
