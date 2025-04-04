import React from 'react';
import { roomsHomeData } from '@/data/RoomsPageData';

const FeaturedRooms = () => {
  return (
    <section className="py-20 bg-[#fff8f3]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#c24e28] tracking-wide">
          Explore Our Rooms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {roomsHomeData.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#f2e7db] hover:shadow-2xl transform transition duration-300 hover:scale-[1.03]"
            >
              <div className="overflow-hidden">
                <img
                  src={room.imageUrl}
                  alt={room.title}
                  className="w-full h-64 object-cover transform transition duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2 text-[#c24e28]">
                  {room.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {room.description}
                </p>
                <a
                  href="/rooms"
                  className="inline-block text-[#d8ad63] font-medium hover:underline hover:text-[#c24e28] transition duration-300"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
