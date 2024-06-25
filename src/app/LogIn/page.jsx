import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function LogIn() {
  return (
    <div className="flex w-full mx-auto px-5  gap-5 justify-between ">
      {/* login form section */}
      <div className=" w-full md:w-[70vw] lg:w-[40vw] px-6 ">
        {/* login page logo and title section */}
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="">here logo</div>
          <h1 className="text-4xl font-bold text-black ">Welcome Back!</h1>
          <p className="text-gray-300 mb-5 ">Please enter your details</p>
        </div>

        {/* social media login section */}
        <div>
          {/* login wiht google */}
          <div className="w-full grid grid-cols-3 gap-5 ">
            <button className="items-center border border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaGoogle className="text-4xl text-blue-500 " />
            </button>
            <button className="items-center border border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaFacebook className="text-4xl text-blue-500 " />
            </button>
            <button className="items-center border border-gray-400 px-3 py-2 rounded-md justify-center flex ">
              <FaTwitter className="text-4xl text-blue-500 " />
            </button>
          </div>

          {/* divider */}
          <div className="divider mt-6 mb-5 ">or</div>

          {/* input fields section */}
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex items-center mt-5 justify-between ">
              <div
                className="flex items-center
             gap-1"
              >
                <input type="checkbox" />
                <span className="text-black font-semibold  ">Remember me</span>
              </div>
              <p className="text-black underline font-semibold ">
                Forgot Password
              </p>
            </div>

            <button className=" mt-6 px-4 py-2 bg-black w-full text-white rounded-3xl ">
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* login images section */}
      <div className=" lg:block hidden md:flex items-center justify-center ">
        <img
          src="https://i.ibb.co/rsd6nSt/Gemini-Generated-Image-rb0caprb0caprb0c.jpg"
          className="lg:w-[50vw] md:w-[50vw] md:mt-[130px] md:h-[50vh] lg:mt-0 lg:h-full object-cover "
        />
      </div>
    </div>
  );
}
