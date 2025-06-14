import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter subscription
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-[var(--parth-bg)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletterPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M0 0L50 50L100 0L50 50L0 100L50 50L100 100" 
                fill="none" 
                stroke="#E91E63" 
                strokeWidth="0.5" 
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletterPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
            Stay Connected with <span className="text-[var(--parth-pink)]">Exclusive</span> Updates
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Unlock special offers, travel tips, and insider insights. Subscribe to our newsletter and elevate your travel experience.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 pr-12 border-2 border-gray-300 rounded-full focus:border-[var(--parth-pink)] focus:ring-2 focus:ring-[var(--parth-pink)]/30 transition-all"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <button 
              type="submit"
              className="bg-[var(--parth-pink)] text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </form>

          {subscribed && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg inline-flex items-center space-x-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <span>Thank you for subscribing!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default NewsletterSection;