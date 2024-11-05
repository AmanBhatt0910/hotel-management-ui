import React from "react";
import Image from "next/image";

import { socialMediaLinks } from "@/data/FooterData";

const SocialMedia = (props) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">{props.heading}</h3>
      <div className="flex space-x-4 mt-4">
        {socialMediaLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Image src={link.src} alt={link.alt} width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
