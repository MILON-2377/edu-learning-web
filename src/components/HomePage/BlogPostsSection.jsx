"use client";

import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Blog Post 1",
    summary: "An informative blog post about educational technology.",
    link: "#",
  },
  {
    title: "Blog Post 2",
    summary: "Tips and tricks for enhancing online learning.",
    link: "#",
  },
];

export default function BlogPostsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <a
                href={post.link}
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
