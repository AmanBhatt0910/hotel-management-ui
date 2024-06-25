import React from "react";
import Link from "next/link";

import { footerNavItems } from '@/data/Footer';

const FooterNavigation = (props) => {
    return(
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">{props.heading}</h3>
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
    )
}
export default FooterNavigation;