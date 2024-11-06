"use client"

import React, { useState } from "react";
import { faqs } from "@/data/HomePageData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer mb-3"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Q. {faq.question}
                </h3>
                <div
                  className={`text-gray-700 mt-3 transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
