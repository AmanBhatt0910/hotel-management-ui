"use client";

import React, { useState } from "react";
import { faqs } from "@/data/HomePageData";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#fdf3e7]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#c24e28] tracking-wide">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#f1e6da] rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left flex items-center justify-between text-xl md:text-2xl font-semibold text-gray-900 focus:outline-none"
              >
                <span>Q. {faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-[#c24e28]" />
                ) : (
                  <FaPlus className="text-[#d8ad63]" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
