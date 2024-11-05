import React from 'react';
import { roomsHomeData } from '@/data/RoomsPageData';

const FeaturedRooms = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roomsHomeData.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={room.imageUrl} alt={room.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">{room.title}</h3>
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
