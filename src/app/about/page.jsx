'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiAward, 
  FiUsers, 
  FiHome,
  FiThumbsUp 
} from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
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
          src="/about.png" 
          alt="About Parth Hotel" 
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
              About <span className="text-[var(--parth-pink)]">Parth Hotel</span>
            </h1>
            <p className="text-xl mb-8">
              Where luxury meets comfort and every stay becomes a cherished memory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Our <span className="text-[var(--parth-pink)]">Story</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2024, Parth Hotel began as a visionary project to transform hospitality in the heart of the city. What started as a boutique hotel with just 5 rooms has now evolved into a landmark destination known for its exceptional service and unique experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our founder, Sumit Pandey, believed that a hotel should be more than just a place to stay—it should be a gateway to the local culture, a sanctuary of comfort, and a canvas for creating lasting memories. Today, we continue to honor that vision through our commitment to excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image 
              src="/images/hotel-history.jpg" 
              alt="Parth Hotel History" 
              fill 
              className="object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[var(--parth-bg)] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Our <span className="text-[var(--parth-pink)]">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our approach to hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: FiAward,
                title: 'Excellence',
                description: 'Striving for perfection in every detail of your experience.',
                color: 'text-[var(--parth-gold)]'
              },
              {
                icon: FiUsers,
                title: 'Community',
                description: 'Supporting local initiatives and creating meaningful connections.',
                color: 'text-[var(--parth-pink)]'
              },
              {
                icon: FiHome,
                title: 'Comfort',
                description: 'Creating spaces that feel like a home away from home.',
                color: 'text-[var(--parth-gold)]'
              },
              {
                icon: FiThumbsUp,
                title: 'Sustainability',
                description: 'Implementing eco-friendly practices throughout our operations.',
                color: 'text-[var(--parth-pink)]'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <value.icon className={`mx-auto text-4xl ${value.color} mb-4`} />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Our <span className="text-[var(--parth-pink)]">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the passionate individuals who make your experience unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Amit Pandey',
              position: 'General Manager',
              image: '/images/team-member-1.jpg'
            },
            {
              name: 'Rahul Rawat',
              position: 'Head Chef',
              image: '/images/team-member-2.jpg'
            },
            {
              name: 'Aman Bhatt',
              position: 'Web Developer',
              image: '/images/team-member-3.jpg'
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-[var(--parth-pink)]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[var(--parth-bg)] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto text-center"
          >
            <div className="mb-6 text-[var(--parth-gold)] text-3xl">❝</div>
            <p className="text-xl text-gray-600 italic mb-6">
              The attention to detail at Parth Hotel is unmatched. From the moment we arrived until our departure, everything was perfect. The staff went above and beyond to make our stay unforgettable.
            </p>
            <div className="font-bold text-gray-800">Jeewan Kandpal</div>
            <div className="text-sm text-gray-500">Loyal guests since 2018</div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}