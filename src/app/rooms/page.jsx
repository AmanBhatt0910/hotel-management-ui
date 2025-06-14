'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FiFilter, 
  FiUsers, 
  FiTv, 
  FiWifi, 
  FiUser, 
  FiArrowRight 
} from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const roomTypes = [
  {
    id: 'deluxe',
    title: 'Deluxe Room',
    description: 'Spacious room with modern amenities and city views.',
    price: 149,
    capacity: 2,
    image: '/images/deluxe-room.jpg',
    features: ['King Size Bed', 'City View', 'Free WiFi', 'Smart TV']
  },
  {
    id: 'premier',
    title: 'Premier Suite',
    description: 'Luxurious suite with separate living area and premium services.',
    price: 249,
    capacity: 3,
    image: '/images/premier-suite.jpg',
    features: ['King Size Bed', 'Living Area', 'Balcony', 'Mini Bar']
  },
  {
    id: 'executive',
    title: 'Executive Room',
    description: 'Elegant room designed for business and comfort.',
    price: 199,
    capacity: 2,
    image: '/images/executive-room.jpg',
    features: ['Queen Size Bed', 'Work Desk', 'Complimentary Breakfast', 'Smart TV']
  },
  {
    id: 'family',
    title: 'Family Room',
    description: 'Spacious room perfect for families with multiple beds.',
    price: 279,
    capacity: 4,
    image: '/images/family-room.jpg',
    features: ['Multiple Beds', 'Living Area', 'Kitchenette', 'Kids Play Area']
  },
  {
    id: 'junior-suite',
    title: 'Junior Suite',
    description: 'Comfortable suite with modern design and extra space.',
    price: 179,
    capacity: 2,
    image: '/images/junior-suite.jpg',
    features: ['King Size Bed', 'Sitting Area', 'Spa-like Bathroom', 'Free WiFi']
  },
  {
    id: 'presidential',
    title: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views and exclusive services.',
    price: 499,
    capacity: 4,
    image: '/images/presidential-suite.jpg',
    features: ['Large Bedroom', 'Private Terrace', 'Personal Butler', 'Jacuzzi']
  }
];

export default function RoomsPage() {
  const [filteredRooms, setFilteredRooms] = useState(roomTypes);
  const [filters, setFilters] = useState({
    guests: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    const filtered = roomTypes.filter(room => 
      (!newFilters.guests || room.capacity >= parseInt(newFilters.guests)) &&
      (!newFilters.minPrice || room.price >= parseInt(newFilters.minPrice)) &&
      (!newFilters.maxPrice || room.price <= parseInt(newFilters.maxPrice))
    );

    setFilteredRooms(filtered);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image 
          src="/rooms.png" 
          alt="Our Rooms" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-serif font-bold mb-4">
              Our <span className="text-[var(--parth-pink)]">Rooms</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Experience unparalleled comfort and luxury in our meticulously designed rooms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 -mt-28"
        >
          <div className="flex items-center mb-6">
            <FiFilter className="mr-3 text-[var(--parth-pink)] text-2xl" />
            <h2 className="text-2xl font-bold text-gray-800">Room Filters</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Guests
              </label>
              <div className="relative">
                <select
                  name="guests"
                  value={filters.guests}
                  onChange={handleFilterChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)]"
                >
                  <option value="">Any</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests</option>
                </select>
                <FiUsers className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Min Price
              </label>
              <input
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                placeholder="₹ Min"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Max Price
              </label>
              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                placeholder="₹ Max"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Room Listings */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[var(--parth-pink)] text-white px-3 py-1 rounded-full text-sm font-medium">
                  ₹{room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <FiUsers className="mr-2 text-[var(--parth-pink)]" />
                    <span>{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center">
                    <FiTv className="mr-2 text-[var(--parth-pink)]" />
                    <FiWifi className="text-[var(--parth-pink)]" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Room Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map(feature => (
                      <span 
                        key={feature} 
                        className="px-2 py-1 bg-[var(--parth-bg)] text-[var(--parth-pink)] rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link href={`/rooms/${room.id}`}>
                  <button className="w-full flex items-center justify-center bg-[var(--parth-pink)] text-white p-3 rounded-lg hover:bg-opacity-90 transition-all group">
                    <span>View Room Details</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              No Rooms Found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to find the perfect room.
            </p>
            <button 
              onClick={() => {
                setFilters({ guests: '', minPrice: '', maxPrice: '' });
                setFilteredRooms(roomTypes);
              }}
              className="bg-[var(--parth-pink)] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <Footer />
    </motion.div>
  );
}