"use client";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword } from "firebase/auth";
import usePublicAxios from "../Hooks/Apis/PublicApi/usePublicAxios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuth } from "@/AuthProvider/AuthProviderContext";

export default function UserRegisterForm({ userData, userDataDi, profession }) {
  const [isVisible, setIsVisible] = useState(false);
  const { userRegistation } = useAuth();
  const [isPassShow, setIsPassShow] = useState(false);
  const publicAxios = usePublicAxios();
  const router = useRouter();

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password, Name }) => {
    userRegistation(email, password)
      .then(async () => {
        try {
          const res = await publicAxios.post("/users", {
            Name,
            email,
            role: profession,
            isAdmin: false,
          });
          if (res.data.insertedId) {
            router.push("/");
            Swal.fire({
              title: "Sign Up Success!",
              text: "Welcome to Amplify!",
              icon: "success",
            });

            reset();
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="welcome-section py-3 h-full w-full">
      <div className="sm:p-4">
        <h2 className=" lg:text-3xl text-xl text-white font-bold">
          Join Our Learning Community Register Today!
        </h2>
      </div>
      <motion.div
        variants={welcomeVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="lg:w-full lg:px-6  lg:h-full lg:rounded-3xl"
      >
        <div className=" w-full flex items-center justify-center ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Name</span>
              <input
                type="text"
                placeholder="Name"
                {...register("Name", {
                  required: true,
                  message: "Name field is required!",
                })}
                className="input focus:outline-none bg-gray-100 w-full "
              />
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Email</span>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="input focus:outline-none bg-gray-100 w-full "
              />
              {errors.email && (
                <p className="text-red-500 overflow-x-scroll ">
                  {errors.email.message}
                </p>
              )}
            </label>
            <label className="flex flex-col relative gap-1 w-full">
              <span className="text-white">Pasword</span>
              <input
                type={isPassShow ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
                  },
                })}
                className="input focus:outline-none bg-gray-100 w-full "
              />
              <span
                onClick={() => setIsPassShow(!isPassShow)}
                className="absolute cursor-pointer top-[44px] right-2 text-xl "
              >
                {isPassShow ? <IoEye /> : <IoMdEyeOff />}
              </span>
              {errors.password && (
                <p className="text-yellow-500 ">{errors.password.message}</p>
              )}
            </label>
            <label className="flex flex-col gap-1 w-full">
              <span className="text-white">Confirm password</span>
              <input
                type={isPassShow ? "text" : "password"}
                placeholder="Confirm password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
                  },
                })}
                className="input focus:outline-none bg-gray-100 w-full "
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

      {/* validation errors displaying through toastify */}
      <ToastContainer />
    </div>
  );
}
