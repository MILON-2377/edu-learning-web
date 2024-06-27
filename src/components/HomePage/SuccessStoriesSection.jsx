"use client";

import { motion } from "framer-motion";

const successStories = [
  {
    title: "Case Study 1",
    description: "How EduConnect improved learning outcomes at ABC School.",
    link: "#",
  },
  {
    title: "Case Study 2",
    description: "Success story of XYZ Academy using EduConnect.",
    link: "#",
  },
];

export default function SuccessStoriesSection() {
  return (
    <div className="py-12 bg-gray-200">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-700 mb-4">{story.description}</p>
              <a
                href={story.link}
                className="text-indigo-600 hover:text-indigo-800 transition"
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
