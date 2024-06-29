"use client";

import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Custom500 from "@/Pages/CustomError/Custom500";
import LoadinSpinner from "@/Pages/CustomLoading/LoadinSpinner";
import useUserDataLoader from "../DataLoaderApi/UserDataLoaderApi/useUserDataLoader";
import { useAuth } from "@/AuthProvider/AuthProviderContext";

export default function Navber({ href }) {
  const router = usePathname();
  const { user, logOutHandle } = useAuth();

  const { data, refetch, error, isLoading } = useUserDataLoader(user?.email);

  useEffect(() => {
    if (user?.email) {
      refetch();
    }
    // console.log(data);
  }, [user, data]);

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

  // navlinks for teachers
  const teachersNavlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Courses",
      path: "/Courses",
    },
    {
      title: "Learning",
      path: "/Learning",
    },
    {
      title: "Community",
      path: "/Community",
    },
  ];

  if (isLoading) return <LoadinSpinner />;
  if (error) return <Custom500 />;

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
                {user
                  ? (data.role === "Teacher" && (
                      <>
                        {teachersNavlinks.map((item, index) => (
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
                      </>
                    )) ||
                    (data.role === "Student" && (
                      <>
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
                      </>
                    ))
                  : navLinks.map((item, index) => (
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
          {user
            ? (data?.role === "Teacher" && (
                <>
                  {teachersNavlinks.slice(0, 3).map((item, index) => (
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
                </>
              )) ||
              (data?.role === "Student" && (
                <>
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
                </>
              ))
            : navLinks.slice(0, 3).map((item, index) => (
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
            {user
              ? (data?.role === "Teacher" && (
                  <>
                    {teachersNavlinks
                      .slice(3, teachersNavlinks.length)
                      .map((item, index) => (
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
                  </>
                )) ||
                (data?.role === "Student" && (
                  <>
                    {studentsUser
                      .slice(3, studentsUser.length)
                      .map((item, index) => (
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
                  </>
                ))
              : navLinks.slice(3, navLinks.length).map((item, index) => (
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
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="w-16 h-16 rounded-full"
              >
                <div className="w-full h-full rounded-full">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm flex flex-col gap-1 p-4 dropdown-content bg-slate-400 rounded-box z-[1] mt-3 w-[230px] lg:w-[260px]  shadow"
              >
                <li>
                  <a className=" px-2 py-1 border border-white rounded-md hover:bg-blue-800 duration-300 ">
                    Profile
                    
                  </a>
                </li>
                <li>
                  <a className=" px-2 py-1 border border-white rounded-md hover:bg-blue-800 duration-300 ">Settings</a>
                </li>
                <li onClick={() => logOutHandle()}>
                  <a className=" px-2 py-1 border border-white rounded-md hover:bg-blue-800 duration-300 ">Logout</a>
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
