"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RegistationCompo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const welcomeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  };

  return (
    <div className="welcome-section lg:w-full">
      <motion.div
        variants={welcomeVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="lg:w-full lg:px-6 border border-white bg-cover bg-center bg-no-repeat lg:h-[500px] lg:rounded-3xl"
        style={{
          backgroundImage: `url("https://i.ibb.co/qYM2fKz/Gemini-Generated-Image-sikc52sikc52sikc.jpg")`,
        }}
      >
        <motion.h2
          variants={textVariants}
          className="text-4xl w-full  lg:block hidden text-white"
        >
          
        </motion.h2>
      </motion.div>
    </div>
  );
}
