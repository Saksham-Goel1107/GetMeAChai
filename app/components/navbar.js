"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const Router = useRouter();
  const [showdropdown, setShowdropdown] = useState(false);
  const { data: session } = useSession();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setShowdropdown(false);
    };
    Router.events?.on("routeChangeStart", handleRouteChange);
    return () => {
      Router.events?.off("routeChangeStart", handleRouteChange);
    };
  }, [Router]);

  return (
    <nav className="bg-black text-white flex justify-between items-center p-4">
      <Link href={"/"}>
        <div className="logo font-bold text-xl">GetMeAChai!</div>
      </Link>
      <div className="relative" ref={dropdownRef}>
        {session && (
          <>
            <button
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 mr-4 dark:focus:ring-blue-800 cursor-pointer"
              type="button"
              onClick={() => setShowdropdown(!showdropdown)}
            >
              Welcome {session.user.email}{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownHover"
              className={`z-10 ${
                showdropdown ? "" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute left-[125]`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li
                  onClick={() => Router.push("/dashboard")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Dashboard
                </li>
                <li>
                  <Link
                    href={`${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Profile
                  </Link>
                </li>
                <li
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </>
        )}
        {session && (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-lg px-5 py-2 cursor-pointer ml-3.5"
          >
            Log out
          </button>
        )}
        {!session && (
          <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-lg px-5 py-2 cursor-pointer">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
