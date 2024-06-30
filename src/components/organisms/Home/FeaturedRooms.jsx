import React from 'react';

import { roomsHomeData } from '@/data/RoomsPageData';

const FeaturedRooms = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsHomeData.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={room.imageUrl} alt={room.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-700 mb-4">{room.description}</p>
                <a href="rooms" className="text-orange-500 hover:underline">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;