import React from 'react';
import { serviceData } from '@/data/HomePageData';

const ServiceSection = () => {
  return (
    <section id="services" className="py-20 bg-[#fdf3e7]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#c24e28] mb-12 tracking-wide">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.03] border border-[#f1e6da] text-center"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-5 mx-auto transition duration-300 hover:rotate-3"
                loading="lazy"
              />
              <h3 className="text-2xl font-semibold mb-3 text-[#c24e28]">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
