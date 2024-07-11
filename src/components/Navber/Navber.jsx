"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import { usePathname } from "next/navigation";
import Custom500 from "@/Pages/CustomError/Custom500";
import LoadinSpinner from "@/Pages/CustomLoading/LoadinSpinner";

import { useAuth } from "@/AuthProvider/AuthProviderContext";
import TeacherNavbar from "./TeacherNavbar";
import StudentNavbar from "./StudentNavbar";

export default function Navber({ href }) {
  const router = usePathname();
  const { user, logOutHandle, errors, loading } = useAuth();

  // console.log(user);
  // nablinks for guest user
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "/features",
    },
    {
      title: "Benefits",
      path: "/benefits",
    },
    {
      title: "About Us",
      path: "/aboutUs",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
  ];

  if ( loading) return <LoadinSpinner />;
  if (errors) return <Custom500 />;

  if (user && user?.role === "Teacher") {
    return <TeacherNavbar></TeacherNavbar>;
  } else if (user && user?.role === "Student") {
    return <StudentNavbar></StudentNavbar>;
  } else {
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
                  {navLinks.map((item, index) => (
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
            {navLinks.slice(0, 3).map((item, index) => (
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
              {navLinks.slice(3, navLinks.length).map((item, index) => (
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
          <a
            href="/LogIn"
            className=" px-3 py-2 border border-white rounded-md hover:bg-blue-800 duration-300 "
          >
            Log In
          </a>
        </div>
      </div>
    );
  }
}
