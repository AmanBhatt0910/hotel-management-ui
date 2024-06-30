import React from "react";

import { FooterContactData } from "@/data/FooterData";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">
      {FooterContactData.map((item, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mb-2 text-center">
            {item.heading}
          </h3>
          <p className="text-gray-400 text-center">{item.address}</p>
          <p className="text-gray-400 text-center">Phone: {item.contact}</p>
          <p className="text-gray-400 text-center">Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FooterContact;
