import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white bg-opacity-25 backdrop-blur-lg rounded-lg p-6 flex flex-col justify-center items-center h-full">
            <Image src="/icons/room-icon.png" alt="Room Icon" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-center">Luxury Rooms</h3>
            <p className="text-gray-700 text-center">Relax in our spacious and elegantly furnished rooms with stunning mountain views.</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white bg-opacity-25 backdrop-blur-lg rounded-lg p-6 flex flex-col justify-center items-center mt-4 md:mt-0 h-full">
            <Image src="/icons/restaurant-icon.png" alt="Restaurant Icon" width={60} height={60} />
            <h3 className="text-xl font-semibold mt-4 text-center">Fine Dining</h3>
            <p className="text-gray-700 text-center">Enjoy a culinary journey with our gourmet cuisine crafted from local ingredients.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
