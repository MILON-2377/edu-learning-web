"use client";
import { FaBook, FaVideo, FaChartBar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const features = [
  {
    icon: <FaBook />,
    title: "Course Management",
    description: "Organize and deliver engaging courses.",
  },
  {
    icon: <FaVideo />,
    title: "Virtual Classrooms",
    description: "Foster interactive learning through live sessions.",
  },
  {
    icon: <FaChartBar />,
    title: "Assessments and Analytics",
    description: "Track progress and personalize learning paths.",
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="py-12 bg-gray-100">
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
          Elevate Your Learning Experience
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={featureVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="text-4xl mb-4 text-indigo-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
