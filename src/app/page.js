'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiUsers, 
  FiChevronDown, 
  FiClock, 
  FiCheck, 
  FiAward,
  FiTrendingUp,
  FiShield,
  FiMapPin,
  FiArrowRight
} from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeatureCard from '@/components/home/FeatureCard';
import TestimonialCard from '@/components/home/TestimonialCard';
import RoomCard from '@/components/home/RoomCard';
import NewsletterSection from '@/components/home/NewsletterSection';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

export default function Home() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState('2');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', { checkInDate, checkOutDate, guests });
  };

  return (
    <motion.main 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white relative"
    >
      <Navbar />
      
      {/* Enhanced Hero Section with Advanced Animations */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.svg"
            alt="Parth Hotel Luxury Room"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 sm:space-y-6 text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
                Experience <span className="text-[var(--parth-pink)]">Unparalleled</span> Luxury
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Immerse yourself in a world of elegance, comfort, and exceptional service. Your extraordinary journey begins here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/booking">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[var(--parth-pink)] text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Book Your Stay
                  </button>
                </Link>
                <Link href="/explore">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--parth-pink)] text-[var(--parth-pink)] rounded-full hover:bg-[var(--parth-pink)] hover:text-white transition-all">
                    Explore Resort
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 mx-4 sm:mx-0"
            >
              <form onSubmit={handleBookingSubmit} className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 text-center">
                  Quick Reservation
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Check In</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all"
                        required
                      />
                      <FiCalendar className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Check Out</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all"
                        required
                      />
                      <FiCalendar className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Guests</label>
                    <div className="relative">
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all appearance-none"
                      >
                        {['1', '2', '3', '4', '5+'].map(num => (
                          <option key={num} value={num}>{num} Guest{num !== '1' ? 's' : ''}</option>
                        ))}
                      </select>
                      <FiUsers className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[var(--parth-pink)] text-white p-3 sm:p-4 rounded-lg hover:bg-opacity-90 transition-all font-medium"
                  >
                    Check Availability
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[var(--parth-pink)]">Parth</span> Hotels
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We go beyond traditional hospitality, offering a blend of modern luxury, personalized service, and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard 
              icon={<FiShield />}
              title="Safety First"
              description="Comprehensive health and safety protocols ensuring peace of mind during your stay."
            />
            <FeatureCard 
              icon={<FiTrendingUp />}
              title="Premium Amenities"
              description="State-of-the-art facilities designed for comfort, productivity, and relaxation."
            />
            <FeatureCard 
              icon={<FiMapPin />}
              title="Prime Location"
              description="Strategically located for easy access to local attractions, dining, and entertainment."
            />
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">ACCOMMODATION</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800">
              Featured Rooms
            </h2>
            <div className="mt-4 w-20 sm:w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <RoomCard 
              title="Balcony Room"
              price={2499}
              image="/images/premier-suite.jpg"
              slug="premier-suite"
            />
            <RoomCard 
              title="Deluxe Room"
              price={1499}
              image="/images/deluxe-room.jpg"
              slug="deluxe-room"
            />
            <RoomCard 
              title="Executive Room"
              price={1999}
              image="/images/executive-room.jpg"
              slug="executive-room"
            />
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link href="/rooms">
              <button className="inline-flex items-center justify-center border-2 border-[var(--parth-pink)] text-[var(--parth-pink)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-[var(--parth-pink)] hover:text-white transition-all">
                View All Rooms <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Teaser */}
      <section className="py-20 sm:py-24 lg:py-28 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant-bg.jpg"
            alt="Parth Restaurant"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-2xl mx-auto text-center text-white">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">DINING</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Fine Dining Experience
            </h2>
            <div className="mt-4 w-20 sm:w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
            <p className="mt-6 text-lg sm:text-xl leading-relaxed px-4">
              Indulge in a culinary journey at our restaurant, where our talented chefs create exquisite dishes using the finest ingredients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link href="/restaurant">
                <button className="w-full sm:w-auto bg-[var(--parth-pink)] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center">
                  Explore Menu <FiArrowRight className="ml-2" />
                </button>
              </Link>
              <Link href="/restaurant/reservation">
                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium hover:bg-white hover:text-[var(--parth-pink)] transition-all flex items-center justify-center">
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">TESTIMONIALS</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800">
              What Our Guests Say
            </h2>
            <div className="mt-4 w-20 sm:w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <TestimonialCard 
              name="Suraj Joshi"
              location="New Delhi"
              testimonial="The service was exceptional and the room was immaculate. I highly recommend Parth Hotel for both business and leisure travelers."
            />
            <TestimonialCard 
              name="Sunita Chowdhary"
              location="Mumbai"
              testimonial="The restaurant offers an amazing dining experience with delicious food and outstanding service. The hotel rooms are spacious and comfortable."
            />
            <TestimonialCard 
              name="Aman Bhatt"
              location="Uttarakhand"
              testimonial="A true luxury experience! The staff was attentive, the rooms were beautiful, and the amenities were top-notch. Will definitely return."
            />
          </div>
        </div>
      </section>

      <NewsletterSection />

      <Footer />
    </motion.main>
  );
}