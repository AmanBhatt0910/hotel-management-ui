"use client"

import React from "react";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  const handleBookNowClick = () => {
    router.push("/contact");
  };

  return (
    <div className="bg-gray-800 py-12 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white">
        Ready to experience luxury?
      </h2>
      <p className="text-gray-400 mt-4">
        Book your stay today and enjoy exclusive offers!
      </p>
      <button
        onClick={handleBookNowClick}
        className="mt-6 px-8 py-4 bg-orange-500 text-white text-lg rounded-full shadow-lg hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition duration-300"
      >
        Book Now
      </button>
    </div>
  );
};

export default CallToAction;
