'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FiStar, 
  FiClock, 
  FiGlobe, 
  FiMap 
} from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const menuCategories = [
  {
    name: 'Appetizers',
    items: [
      {
        name: 'Naan',
        description: 'Freshly baked traditional Indian bread with garlic and herbs.',
        price: 449,
        image: '/images/garlic-naan.jpg'
      },
      {
        name: 'Pakodi',
        description: 'Crispy gram flour fritters with mixed vegetables and mint chutney.',
        price: 99,
        image: '/images/vegetable-pakodi.jpg'
      }
    ]
  },
  {
    name: 'Main Courses',
    items: [
      {
        name: 'Chana Masala',
        description: 'Spiced chickpeas in rich tomato gravy with aromatic Indian spices.',
        price: 299,
        image: '/images/chana-masala.jpg'
      },
      {
        name: 'Palak Paneer',
        description: 'Fresh cottage cheese cubes in creamy spinach curry with garam masala.',
        price: 349,
        image: '/images/palak-paneer.jpg'
      }
    ]
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Gajar ka Halwa',
        description: 'Traditional carrot pudding slow-cooked with milk and cardamom.',
        price: 89,
        image: '/images/gajar-halwa.jpg'
      },
      {
        name: 'Baal Mithai',
        description: 'Sweet Kumaoni delicacy with roasted khoya and sugar balls coating.',
        price: 29,
        image: '/images/baal-mithai.jpg'
      }
    ]
  }
];

export default function RestaurantPage() {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].name);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image 
          src="/restaurant.png" 
          alt="Parth Hotel Restaurant" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl px-4"
          >
            <h1 className="text-5xl font-serif font-bold mb-4">
              Culinary <span className="text-[var(--parth-pink)]">Excellence</span>
            </h1>
            <p className="text-xl mb-8">
              A gastronomic journey that blends local flavors with international sophistication. Our chefs craft each dish with passion and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiStar className="mx-auto text-4xl text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced-Chef</h3>
            <p className="text-gray-600">Recognized for culinary innovation and excellence</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiClock className="mx-auto text-4xl text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Open Daily</h3>
            <p className="text-gray-600">Breakfast, Lunch & Dinner from 6:00 AM to 10:00 PM</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiGlobe className="mx-auto text-4xl text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Cuisine</h3>
            <p className="text-gray-600">Diverse menu inspired by international flavors</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiMap className="mx-auto text-4xl text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Local Ingredients</h3>
            <p className="text-gray-600">Sourcing fresh, local produce daily</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our <span className="text-[var(--parth-pink)]">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A carefully curated selection of dishes that celebrate flavor, creativity, and passion.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-lg p-2 inline-flex space-x-2">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category.name 
                    ? 'bg-[var(--parth-pink)] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories
            .find(category => category.name === selectedCategory)
            .items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex"
              >
                <div className="w-1/3 relative">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-[var(--parth-pink)] font-bold text-2xl">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="bg-[var(--parth-bg)] text-[var(--parth-pink)] px-4 py-2 rounded-full hover:bg-opacity-90 transition-all">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Reservation Section */}
      <section className="bg-[var(--parth-bg)] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Reserve Your <span className="text-[var(--parth-pink)]">Table</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience an unforgettable dining journey. Book your table and let us create a memorable culinary experience.
            </p>
            <button className="bg-[var(--parth-pink)] text-white px-10 py-4 rounded-full text-xl hover:bg-opacity-90 transition-all shadow-lg">
              Make a Reservation
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}