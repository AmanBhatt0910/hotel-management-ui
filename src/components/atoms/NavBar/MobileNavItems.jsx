import React from "react";
import Link from "next/link";
import { navItems } from "@/data/NavbarData";
import NavButton from "./NavButton";

const MobileNavItems = () => {
  return (
    <div className="flex flex-col items-center space-y-4 py-4">
      {navItems.map((item, index) => (
        <Link href={item.href} key={index} className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105">
          {item.label}
        </Link>
      ))}
      <div className="flex flex-col items-center space-y-4 py-4">
        <NavButton
          href="/login"
          text="Login"
          className="text-gray-300 hover:text-orange-500 transition duration-300 transform hover:scale-105"
        />
        <NavButton
          href="/signup"
          text="Signup"
          className="py-2 px-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-400 transition duration-300 transform hover:scale-105 hover:shadow-xl"
        />
      </div>
    </div>
  );
};

export default MobileNavItems;
