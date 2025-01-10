"use client";

import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-orange-500 mb-6">
          About Parth Hotel
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Nestled amidst the serene mountains, Parth Hotel offers a perfect
          blend of luxury, comfort, and tranquility. Our hotel is designed to
          provide an unforgettable experience with world-class amenities,
          exceptional service, and breathtaking views.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition duration-300">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Breathtaking Mountain Views</h3>
          <p className="text-gray-300">
            Enjoy the stunning beauty of the surrounding mountains from our
            panoramic viewpoints. The perfect place to relax and take in nature’s
            wonders.
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition duration-300">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Squash Center</h3>
          <p className="text-gray-300">
            Challenge yourself in our state-of-the-art squash center. Guests can
            enjoy friendly matches or buy squash equipment from our well-stocked
            store.
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition duration-300">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">General Shop</h3>
          <p className="text-gray-300">
            Our on-site general shop offers a variety of essentials and souvenirs
            for guests. Whether you need a quick snack or a unique gift, we have it
            all.
          </p>
        </div>

        <div className="bg-gray-700 rounded-lg p-8 text-center shadow-lg hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] transition duration-300">
          <h3 className="text-2xl font-bold text-orange-500 mb-4">Restaurant</h3>
          <p className="text-gray-300">
            Indulge in exquisite meals at our gourmet restaurant, where you will
            find a variety of local and international dishes prepared with fresh,
            high-quality ingredients.
          </p>
        </div>

      </div>

      <div className="mt-16 text-center">
        <a
          href="/rooms"
          className="px-8 py-4 bg-orange-500 text-white text-lg rounded-full shadow-lg hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(255,165,0,0.6)] transition duration-300"
        >
          Explore Our Rooms
        </a>
      </div>
    </div>
  );
};

export default About;
