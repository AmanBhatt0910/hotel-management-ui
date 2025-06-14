import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function RoomCard({ title, price, image, slug }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all hover:shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center">
            <span className="text-[var(--parth-pink)] font-bold text-3xl">₹{price}</span>
            <span className="text-gray-500 text-sm ml-1"> / night</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-[var(--parth-bg)] text-[var(--parth-pink)] rounded-full text-xs">Wifi</span>
            <span className="px-3 py-1 bg-[var(--parth-bg)] text-[var(--parth-pink)] rounded-full text-xs">AC</span>
          </div>
          <Link 
            href={`/rooms/${slug}`} 
            className="text-[var(--parth-pink)] hover:underline font-medium flex items-center group"
          >
            View Details
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}