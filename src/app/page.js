'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiCheck, 
  FiAward,
  FiTrendingUp,
  FiShield,
  FiArrowRight,
  FiStar,
  FiWifi,
  FiCoffee,
  FiTruck,
  FiCamera,
  FiPlay,
  FiChevronLeft,
  FiChevronRight
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

const heroImages = [
  '/hero-bg.png',
  '/room-inside.jpg',
  '/room-view-1.jpg'
];

const amenityIcons = [
  { icon: <FiWifi />, name: 'Free WiFi' },
  { icon: <FiCoffee />, name: 'Restaurant' },
  { icon: <FiTruck />, name: 'Parking' },
  { icon: <FiShield />, name: '24/7 Security' }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
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
      
      {/* Hero Section with Image Carousel and Contact Card */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Parth Hotel"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <FiChevronLeft className="text-white text-xl" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all"
        >
          <FiChevronRight className="text-white text-xl" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-white"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-serif font-bold leading-tight"
              >
                Experience <span className="text-[var(--parth-pink)]">Unparalleled</span> Luxury
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl leading-relaxed"
              >
                Immerse yourself in a world of elegance, comfort, and exceptional service. Your extraordinary journey begins here.
              </motion.p>

              {/* Amenity Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex space-x-6"
              >
                {amenityIcons.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full">
                      {amenity.icon}
                    </div>
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex space-x-4"
              >
                <Link href="/explore">
                  <button className="px-8 py-4 bg-[var(--parth-pink)] text-white rounded-full hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center">
                    <FiCamera className="mr-2" />
                    Virtual Tour
                  </button>
                </Link>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[var(--parth-pink)] transition-all flex items-center"
                >
                  <FiPlay className="mr-2" />
                  Watch Video
                </button>
              </motion.div>
            </motion.div>

            {/* Contact & Inquiry Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-serif font-bold text-gray-800">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mt-2">Ready to plan your perfect stay?</p>
              </div>

              <div className="space-y-4">
                {/* Direct Contact Options */}
                <a 
                  href="tel:+91-XXXXXXXXXX" 
                  className="flex items-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all group"
                >
                  <FiPhone className="mr-3 group-hover:rotate-12 transition-transform" />
                  <div>
                    <div className="font-semibold">Call Now</div>
                    <div className="text-sm opacity-90">+91-XXXXXXXXXX</div>
                  </div>
                </a>

                {/* Quick Inquiry Form */}
                <div className="border-t pt-4 mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Quick Inquiry</h3>
                  <form className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows="3"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--parth-pink)] transition-all"
                    ></textarea>
                    <button 
                      type="submit"
                      className="w-full bg-[var(--parth-pink)] text-white p-3 rounded-lg hover:bg-opacity-90 transition-all"
                    >
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
              >
                ✕
              </button>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-white text-center">
                  <FiPlay className="text-6xl mx-auto mb-4" />
                  <p>Hotel Video Would Play Here</p>
                  <p className="text-sm opacity-70 mt-2">Replace with your actual video embed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--parth-pink)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-pink-100">Happy Guests</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-pink-100">Luxury Rooms</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-pink-100 flex items-center justify-center">
                <FiStar className="mr-1" /> Rating
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-pink-100">Service</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-serif font-bold text-gray-900 mb-4"
            >
              Why Choose <span className="text-[var(--parth-pink)]">Parth</span> Hotels
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We go beyond traditional hospitality, offering a blend of modern luxury, personalized service, and unforgettable experiences.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FeatureCard 
                icon={<FiShield />}
                title="Safety First"
                description="Comprehensive health and safety protocols ensuring peace of mind during your stay."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FeatureCard 
                icon={<FiTrendingUp />}
                title="Premium Amenities"
                description="State-of-the-art facilities designed for comfort, productivity, and relaxation."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FeatureCard 
                icon={<FiMapPin />}
                title="Prime Location"
                description="Strategically located for easy access to local attractions, dining, and entertainment."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">ACCOMMODATION</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              Featured Rooms
            </h2>
            <div className="mt-4 w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <RoomCard 
                title="Balcony Room"
                price={2499}
                image="/images/premier-suite.jpg"
                slug="premier-suite"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <RoomCard 
                title="Deluxe Room"
                price={1499}
                image="/images/deluxe-room.jpg"
                slug="deluxe-room"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <RoomCard 
                title="Executive Room"
                price={1999}
                image="/images/executive-room.jpg"
                slug="executive-room"
              />
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/rooms">
              <button className="inline-flex items-center justify-center border-2 border-[var(--parth-pink)] text-[var(--parth-pink)] px-8 py-4 rounded-lg font-medium hover:bg-[var(--parth-pink)] hover:text-white transition-all">
                View All Rooms <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Teaser */}
      <section className="py-28 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant-bg.jpg"
            alt="Parth Restaurant"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto text-center text-white">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">DINING</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Fine Dining Experience
            </h2>
            <div className="mt-4 w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
            <p className="mt-6 text-lg">
              Indulge in a culinary journey at our restaurant, where our talented chefs create exquisite dishes using the finest ingredients.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/restaurant">
                <button className="bg-[var(--parth-pink)] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center">
                  Explore Menu <FiArrowRight className="ml-2" />
                </button>
              </Link>
              <Link href="/restaurant/reservation">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-[var(--parth-pink)] transition-all flex items-center justify-center">
                  Reserve a Table
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[var(--parth-pink)] font-medium mb-2">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              What Our Guests Say
            </h2>
            <div className="mt-4 w-24 h-1 bg-[var(--parth-gold)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <TestimonialCard 
                name="Suraj Joshi"
                location="New Delhi"
                testimonial="The service was exceptional and the room was immaculate. I highly recommend Parth Hotel for both business and leisure travelers."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TestimonialCard 
                name="Sunita Chowdhary"
                location="Mumbai"
                testimonial="The restaurant offers an amazing dining experience with delicious food and outstanding service. The hotel rooms are spacious and comfortable."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TestimonialCard 
                name="Aman Bhatt"
                location="Uttarakhand"
                testimonial="A true luxury experience! The staff was attentive, the rooms were beautiful, and the amenities were top-notch. Will definitely return."
              />
            </motion.div>
          </div>
        </div>
      </section>

      <NewsletterSection />

      <Footer />
    </motion.main>
  );
}