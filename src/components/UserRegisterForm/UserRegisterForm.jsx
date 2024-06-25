"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function UserRegisterForm() {
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
    <div className="welcome-section h-full w-full">
      <motion.div
        variants={welcomeVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="lg:w-full lg:px-6  lg:h-full lg:rounded-3xl"
      >
        <div className=" w-full flex items-center justify-center ">
          <form className="w-full">
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Name</span>
              <input
                type="text"
                placeholder="Name"
                className="input focus:outline-none bg-gray-300 w-full "
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Email</span>
              <input
                type="email"
                placeholder="Email"
                className="input focus:outline-none bg-gray-300 w-full "
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Pasword</span>
              <input
                type="password"
                placeholder="Password"
                className="input focus:outline-none bg-gray-300 w-full "
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Confirm password</span>
              <input
                type="password"
                placeholder="Confirm password"
                className="input focus:outline-none bg-gray-300 w-full "
              />
            </label>
            <button className="px-3 transition-all text-xl font-semibold duration-500  hover:bg-fuchsia-500 mt-9 py-2  border border-white text-white rounded-3xl w-full ">
              Sign Up
            </button>
          </form>
        </div>

        <motion.h2
          variants={textVariants}
          className="text-4xl w-full  lg:block hidden text-white"
        ></motion.h2>
      </motion.div>
    </div>
  );
}
