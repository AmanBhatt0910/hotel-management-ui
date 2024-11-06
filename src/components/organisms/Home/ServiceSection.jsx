import React from 'react';
import { serviceData } from '@/data/HomePageData';

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            >
              {/* Icon Animation */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4 transition duration-300 transform hover:rotate-6"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
