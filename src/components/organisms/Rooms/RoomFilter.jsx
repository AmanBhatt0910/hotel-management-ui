import React from "react";

const RoomFilter = () => {
  return (
    <div className="bg-gray-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search rooms..."
          className="w-full md:w-1/3 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          className="w-full md:w-1/4 p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Room Type</option>
          <option value="deluxe">Deluxe</option>
          <option value="executive">Executive</option>
          <option value="standard">Standard</option>
        </select>
        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-400 transition">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default RoomFilter;
