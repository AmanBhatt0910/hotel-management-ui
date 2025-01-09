import React from "react";
import { testimonialsData } from "@/data/HomePageData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-6 border-2 border-gray-200"
                  loading="lazy"
                />
                <div>
                  <div className="text-gray-900 text-xl font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
