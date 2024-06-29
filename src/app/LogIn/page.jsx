"use client";
import { useAuth } from "@/AuthProvider/AuthProviderContext";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function LogIn() {
  const {userLogIn} = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Mkjdk@er41Jsk

  const onSubmit = async({Email, password}) => {
    try {
      const res = await userLogIn(Email, password);
      if(res){
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex bg-[url('https://i.ibb.co/R7MRKMn/Gemini-Generated-Image-d4ottmd4ottmd4ot.jpg')] bg-cover lg:bg-none bg-center bg-no-repeat h-screen sm:h-full w-full mx-auto px-5  gap-5 justify-between ">
      {/* login form section */}
      <div className=" w-full md:w-[70vw] lg:w-[40vw] px-6 ">
        {/* login page logo and title section */}
        <div className="flex flex-col mt-4 gap-4 items-center justify-center">
          <div className="h-24 w-h-24 rounded-full">
            <img
              src="https://i.ibb.co/bRT22kw/Gemini-Generated-Image-j4vzpnj4vzpnj4vz.jpg"
              className="w-full rounded-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-white lg:text-black ">
            Welcome Back!
          </h1>
          <p className="text-gray-400 text-xl ">
            Please enter your details
          </p>
        </div>

        {/* social media login section */}
        <div>
          {/* login wiht google */}
          <div className="w-full grid grid-cols-3 gap-5 mb-6 mt-4 ">
            <button className="items-center border border-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaGoogle className="text-4xl  text-blue-500 " />
            </button>
            <button className="items-center border border-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaFacebook className="text-4xl text-blue-500 " />
            </button>
            <button className="items-center border border-white bg-black bg-opacity-50 lg:bg-opacity-0 lg:border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaTwitter className="text-4xl text-blue-500 " />
            </button>
          </div>

          {/* divider */}
          <div className="divider mb-4 ">or</div>

          {/* input fields section */}
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white lg:text-gray-700 ">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("Email", {
                  required: true,
                  message: "email field is required!",
                })}
                className="input focus:outline-none border border-yellow-500 input-bordered"
                required
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white lg:text-gray-700 ">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  message: "password field is required",
                })}
                placeholder="Password"
                className="input focus:outline-none border border-yellow-500 input-bordered"
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center mt-5 justify-between ">
              <div
                className="flex items-center
             gap-1"
              >
                <input type="checkbox" />
                <span className="lg:text-black text-white font-semibold  ">
                  Remember me
                </span>
              </div>
              <p className="lg:text-black text-white underline font-semibold ">
                Forgot Password
              </p>
            </div>

            <button className=" mt-6 px-4 py-2 bg-black w-full text-white rounded-3xl ">
              Sign In
            </button>
          </form>
        </div>
        <a href="/RegisterPage" className=" text-white lg:text-black px-4 ">
          Do not have an account?{""}
          <span className=" text-blue-800 ml-2 underline">click here</span>{" "}
        </a>
      </div>

      {/* login images section */}
      <div className=" lg:block hidden md:flex items-center justify-center ">
        <img
          src="https://i.ibb.co/R7MRKMn/Gemini-Generated-Image-d4ottmd4ottmd4ot.jpg"
          className="lg:w-[50vw] md:w-[50vw] md:mt-[130px] md:h-[50vh] lg:mt-0 lg:h-full object-cover "
        />
      </div>
    </div>
  );
}
