"use client";

import React from "react";
import RoomHeader from "@/components/organisms/Rooms/RoomHeader";
import RoomFilter from "@/components/organisms/Rooms/RoomFilter";
import RoomCard from "@/components/organisms/Rooms/RoomCard";
import CallToAction from "@/components/organisms/Rooms/CallToAction";

const Rooms = () => {
  return (
    <div className="bg-gray-900 text-white">
      <RoomHeader />

      <RoomFilter />

      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <RoomCard
          title="Deluxe Suite"
          price="4000"
          description="Experience ultimate luxury with stunning mountain views."
          image="/gallery/image1.jpg"
        />
        <RoomCard
          title="Executive Room"
          price="3000"
          description="Perfect for business travelers, offering comfort and style."
          image="/gallery/image1.jpg"
        />
        <RoomCard
          title="Standard Room"
          price="2000"
          description="Cozy and affordable rooms with modern amenities."
          image="/gallery/image4.jpg"
        />
        {/* We will add more Room COmponent here */}
      </div>

      <CallToAction />
    </div>
  );
};

export default Rooms;