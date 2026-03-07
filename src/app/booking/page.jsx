'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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

export default function BookingPage() {

  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-bg.svg"
          alt="Parth Hotel Booking"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Reserve Your <span className="text-[var(--parth-pink)]">Stay</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Contact us directly and our team will assist you with availability and reservation.
          </p>
        </div>
      </section>

      {/* Booking Card */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-10 border border-gray-100 text-center"
          >

            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Reserve Your Stay
            </h2>

            <p className="text-gray-600 mb-8">
              Online booking is currently unavailable. Please contact us directly and our team will assist you with availability and reservation.
            </p>

            {/* Phone */}
            <div className="bg-[var(--parth-bg)] rounded-xl p-6 mb-8">
              <p className="text-gray-500 text-sm">
                Call us for reservations
              </p>

              <p className="text-3xl font-bold text-[var(--parth-pink)] mt-2">
                +91 9557884358
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="tel:+919557884358"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--parth-pink)] text-white rounded-lg font-medium hover:bg-opacity-90 transition shadow-md"
              >
                <FiPhone />
                Call Now
              </a>

              <a
                href="https://wa.me/919557884358?text=Hello%20Parth%20Hotel,%0A%0AI%20would%20like%20to%20inquire%20about%20room%20availability.%0A%0ACheck-in%20Date:%20%0ACheck-out%20Date:%20%0ANumber%20of%20Guests:%20%0A%0APlease%20let%20me%20know%20availability%20and%20pricing.%0A%0AThank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--parth-pink)] text-[var(--parth-pink)] rounded-lg font-medium hover:bg-[var(--parth-pink)] hover:text-white transition"
              >
                <FiMessageCircle />
                WhatsApp Us
              </a>

            </div>

            <p className="text-sm text-gray-500 mt-6">
              Our staff will respond quickly and help complete your reservation.
            </p>

          </motion.div>

        </div>
      </section>

      <Footer />
    </motion.main>
  );
}about