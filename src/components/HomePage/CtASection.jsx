"use client";

import { motion } from "framer-motion";

export default function CTASecton() {
  return (
    <div className="py-16 bg-indigo-600 text-white text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get Started Today!
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience the benefits of EduConnect. Sign up for free, request a demo, or learn more about our features.
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Sign Up for Free
          </motion.a>
          <motion.a
            href="#"
            className="bg-indigo-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Request a Demo
          </motion.a>
          <motion.a
            href="#"
            className="bg-gray-100 text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </div>
  );
}
