"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // We will send the message to the email of Parth hotels
    alert("Form submitted!");
  };

  return (
    <div className="bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          We are here to assist you with any questions or feedback. Reach out to us!
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {["Location", "Call Us", "Email Us"].map((title, idx) => (
          <motion.div
            key={idx}
            className="text-center p-6 border rounded-lg shadow-xl transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: idx * 0.3 }}
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-900 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-600 mb-4">
              {title === "Location"
                ? "Parth Hotel, Pande Toli, Almora, Uttarakhand, 263623"
                : title === "Call Us"
                ? "Reach us at (+91) 97567 05659 for immediate assistance."
                : "For inquiries, reach us at info@parthhotel.com"}
            </p>
            <motion.a
              href={title === "Location" ? "https://www.google.com/maps" : title === "Call Us" ? "tel:+919756705659" : "mailto:info@parthhotel.com"}
              className="text-orange-500 hover:underline"
              whileHover={{ scale: 1.1 }}
            >
              {title === "Location" ? "View on Google Maps" : title === "Call Us" ? "Call Now" : "Send an Email"}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-2xl mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700">
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700">
              Your Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-gray-700">
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              rows="5"
              required
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-orange-500 text-white text-lg rounded-lg shadow-lg hover:bg-orange-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Submit Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Find Us Here
        </h3>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
