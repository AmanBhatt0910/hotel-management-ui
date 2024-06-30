import React from 'react';

import { faqs } from '@/data/HomePageData';

const FAQSection = () => {
  return (
    <section id='faq' className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Q. {faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
