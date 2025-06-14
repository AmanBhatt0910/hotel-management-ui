import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function TestimonialCard({ name, location, testimonial }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      {/* Background Accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--parth-bg)] rounded-full opacity-10 group-hover:opacity-20 transition-all"></div>

      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full bg-[var(--parth-bg)] flex items-center justify-center text-[var(--parth-pink)] font-bold text-2xl mr-4 shadow-md">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-xl text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
      
      <div className="relative mb-6">
        <svg 
          className="absolute -top-2 -left-4 w-12 h-12 text-[var(--parth-pink)] opacity-10" 
          fill="currentColor" 
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-600 italic pl-6 text-lg leading-relaxed">
          "{testimonial}"
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star} 
              className="w-5 h-5 text-[var(--parth-gold)]" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-sm text-gray-500 flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 text-[var(--parth-pink)]" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
          Verified Guest
        </div>
      </div>
    </motion.div>
  );
}