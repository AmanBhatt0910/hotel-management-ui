'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiUser, 
  FiMessageCircle 
} from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
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
          src="/contact.png" 
          alt="Contact Parth Hotel" 
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
              Contact <span className="text-[var(--parth-pink)]">Us</span>
            </h1>
            <p className="text-xl mb-8">
              We're here to answer your questions and make your experience exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiMapPin className="mx-auto text-4xl text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">123 Hospitality Lane, City Center, State 10001</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiPhone className="mx-auto text-4xl text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiMail className="mx-auto text-4xl text-[var(--parth-pink)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">contact@parthhotel.com</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <FiClock className="mx-auto text-4xl text-[var(--parth-gold)] mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hours</h3>
            <p className="text-gray-600">Reception: 24/7<br />Restaurant: 6AM - 10PM</p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 font-bold">Map Would Be Here</p>
          </div>
        </div>
      </section>

      {/* Contact Form & QR Code Section */}
      <section className="bg-[var(--parth-bg)] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Send Us a <span className="text-[var(--parth-pink)]">Message</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Fill out the form below or scan our QR code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--parth-pink)]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--parth-pink)]"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--parth-pink)] appearance-none"
                    required
                  >
                    <option value="" disabled>Select a Subject</option>
                    <option value="Reservation">Reservation Inquiry</option>
                    <option value="Event">Event Planning</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <FiMessageCircle className="absolute left-3 top-3 text-gray-400" />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--parth-pink)]"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-[var(--parth-pink)] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Scan Our <span className="text-[var(--parth-pink)]">QR Code</span>
              </h3>
              <div className="bg-white p-3 rounded-xl shadow-inner mb-6">
                <Image 
                  src="/qr-code.jpg"
                  alt="Contact QR Code" 
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center">
                Scan to save our contact information directly to your phone
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}