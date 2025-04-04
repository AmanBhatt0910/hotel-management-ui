import React from "react";
import { testimonialsData } from "@/data/HomePageData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#fff8f3]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-[#c24e28] tracking-wide">
          What Our Guests Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-[#f1e6da] rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-[#d8ad63] mr-4"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-[#c24e28] text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>

              <p className="text-gray-800 text-lg italic leading-relaxed">
                “{testimonial.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
