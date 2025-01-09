import React from "react";

const RoomCard = ({ title, price, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-orange-500 text-lg font-semibold">₹{price}/night</span>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-400 transition"
            aria-label={`Book a room for ₹${price} per night`} // Accessibility improvement
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
