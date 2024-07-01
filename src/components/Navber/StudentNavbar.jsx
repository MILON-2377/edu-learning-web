"use client";

import { useAuth } from "@/AuthProvider/AuthProviderContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMenu } from "react-icons/io5";

export default function StudentNavbar() {
  const router = usePathname();
  const { user } = useAuth();
  // user navliks
  const studentsUser = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Course",
      path: "/Course",
    },
    {
      title: "Learning",
      path: "/Learning",
    },
    {
      title: "Community",
      path: "/Community",
    },
    {
      title: "Support",
      path: "/Support",
    },
  ];

  return (
    <div className="navbar bg-slate-950 bg-opacity-40 text-white ">
      <div className="navbar-start">
        <div className="flex lg:hidden items-center justify-between">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button">
                <IoMenu className="text-3xl cursor-pointer " />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu flex flex-col gap-1 bg-base-200 text-base-content min-h-full w-80 p-4">
                {studentsUser.map((item, index) => (
                  <Link
                    href={item.path}
                    key={index}
                    className={
                      router === item.path
                        ? "border border-yellow-500 text-fuchsia-500 px-2 py-1 rounded-md"
                        : "px-2  hover:text-fuchsia-500 "
                    }
                  >
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <a className="hidden lg:block ml-5 text-2xl">Amplify</a>
      </div>

      <a className="btn lg:hidden btn-ghost text-center text-xl">Amplify</a>

      <div className="navbar-center hidden lg:flex gap-5 ">
        {/* navbar titles section */}
        <div className="flex items-center gap-1">
          {studentsUser.slice(0, 3).map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={
                router === item.path
                  ? "border border-yellow-500 px-2 py-1 rounded-md"
                  : "p-1  hover:text-fuchsia-500 "
              }
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* logo section */}
        <div className="h-16 w-16 rounded-full">
          <img
            src="https://i.ibb.co/bRT22kw/Gemini-Generated-Image-j4vzpnj4vzpnj4vz.jpg"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* navbar titles section */}
        <div>
          {/* without Login user titles */}
          <div className="flex items-center gap-1">
            {studentsUser.slice(3, studentsUser.length).map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={
                  router === item.path
                    ? "border border-yellow-500 px-2 py-1 rounded-md"
                    : "p-1  hover:text-fuchsia-500 "
                }
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <a
              href="/LogIn"
              className=" px-3 py-2 border border-white rounded-md hover:bg-blue-800 duration-300 "
            >
              Log In
            </a>
          </>
        )}
      </div>
    </div>
  );
}
