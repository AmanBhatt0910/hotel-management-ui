'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star, Clock, Globe, MapPin, UtensilsCrossed,
  Coffee, Egg, Sandwich, Salad, Flame, Soup,
  Leaf, Mountain, Wheat, CircleDot, CupSoda, IceCreamCone
} from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MenuCategory from '@/components/menu/MenuCategory';
import menuData from '@/data/menuData.json';
import '@/components/menu/menu.css';

const iconMap = {
  Star, Clock, Globe, MapPin, UtensilsCrossed,
  Coffee, Egg, Sandwich, Salad, Flame, Soup,
  Leaf, Mountain, Wheat, CircleDot, CupSoda, IceCreamCone
};

function DynIcon({ name, size = 16, className = '' }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} strokeWidth={1.8} />;
}

export default function RestaurantPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const allCategories = menuData.categories;

  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return allCategories;
    return allCategories.filter(cat => cat.name === activeFilter);
  }, [activeFilter, allCategories]);

  const totalItems = useMemo(() => {
    return allCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [allCategories]);

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
          src="/restaurant.jpg" 
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
            <DynIcon name="Star" size={36} className="mx-auto text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced-Chef</h3>
            <p className="text-gray-600">Recognized for culinary innovation and excellence</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <DynIcon name="Clock" size={36} className="mx-auto text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Open Daily</h3>
            <p className="text-gray-600">Breakfast, Lunch & Dinner from 6:00 AM to 10:00 PM</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <DynIcon name="Globe" size={36} className="mx-auto text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Cuisine</h3>
            <p className="text-gray-600">Diverse menu inspired by international flavors</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <DynIcon name="MapPin" size={36} className="mx-auto text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Local Ingredients</h3>
            <p className="text-gray-600">Sourcing fresh, local produce daily</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="container mx-auto px-4 py-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our <span className="text-[var(--parth-pink)]">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete restaurant menu — authentic Kumaoni flavours crafted with love.
          </p>
        </div>

        {/* Stats */}
        <div className="menu-stats">
          <div className="menu-stats__item">
            <span className="menu-stats__number">{allCategories.length}</span>
            <span className="menu-stats__label">Categories</span>
          </div>
          <div className="menu-stats__item">
            <span className="menu-stats__number">{totalItems}</span>
            <span className="menu-stats__label">Dishes</span>
          </div>
        </div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="menu-cover"
        >
          <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
            <Image
              src="/menu/menu1.jpeg"
              alt="Parth Hotel Menu Cover"
              fill
              className="object-contain"
              style={{ background: '#f5e6d3' }}
            />
          </div>
        </motion.div>

        {/* Category Filter Navigation */}
        <div className="menu-filter">
          <button
            onClick={() => setActiveFilter('all')}
            className={`menu-filter__btn ${activeFilter === 'all' ? 'menu-filter__btn--active' : ''}`}
          >
            <span className="menu-filter__icon"><DynIcon name="UtensilsCrossed" size={14} /></span>
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`menu-filter__btn ${activeFilter === cat.name ? 'menu-filter__btn--active' : ''}`}
            >
              <span className="menu-filter__icon"><DynIcon name={cat.icon} size={14} /></span>
              {cat.name.charAt(0) + cat.name.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Menu Categories Grid */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="menu-grid"
            >
              {filteredCategories.map((cat) => (
                <MenuCategory key={cat.name} category={cat} />
              ))}
            </motion.div>
          </AnimatePresence>
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