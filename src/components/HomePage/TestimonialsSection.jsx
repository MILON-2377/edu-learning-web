"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "EduConnect has revolutionized our learning experience. Highly recommend!",
    name: "John Doe",
    position: "Teacher",
    company: "XYZ School",
  },
  {
    quote: "The best platform for interactive learning!",
    name: "Jane Smith",
    position: "Principal",
    company: "ABC Academy",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-bold">{testimonial.name}</p>
              <p className="text-sm">
                {testimonial.position}, {testimonial.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
