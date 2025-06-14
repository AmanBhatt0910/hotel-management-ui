import { motion } from 'framer-motion';
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group text-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--parth-bg)] rounded-full opacity-10 group-hover:opacity-20 transition-all"></div>
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--parth-bg)] text-[var(--parth-pink)] mb-6 mx-auto shadow-md group-hover:shadow-lg transition-all">
          {icon && React.cloneElement(icon, { className: 'w-10 h-10' })}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[var(--parth-pink)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}