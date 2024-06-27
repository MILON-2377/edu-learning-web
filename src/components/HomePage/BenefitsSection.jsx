"use client";

import { FaChartLine, FaUserGraduate, FaCog } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const benefits = [
  {
    icon: <FaChartLine />,
    title: "Improved Learning Outcomes",
    description: "List specific benefits here.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Enhanced Engagement",
    description: "Describe how EduConnect fosters engagement.",
  },
  {
    icon: <FaCog />,
    title: "Streamlined Administration",
    description: "Explain how EduConnect simplifies tasks for administrators.",
  },
];

const benefitVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BenefitsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1 }}
        >
          Why Choose EduConnect?
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:-translate-y-2 hover:shadow-lg"
              variants={benefitVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="text-4xl mb-4 text-indigo-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
