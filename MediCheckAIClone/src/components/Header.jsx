import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/MediCheck.AI.png";

const Navbar = ({ bgColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={"w-full py-4 px-6 md:px-20 relative h-20" + " " + bgColor}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold">
            <span className="text-black font-poppins font-extrabold text-2xl md:text-5xl">
              MediCheck.<span className="text-blue-700">AI</span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-x-8 lg:gap-x-20">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:cursor-pointer font-poppins ${
                isActive ? "text-black font-medium text-base" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:cursor-pointer font-poppins ${
                isActive ? "text-black font-semibold" : "text-gray-700"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:cursor-pointer font-poppins ${
                isActive ? "text-black font-semibold" : "text-gray-700"
              }`
            }
          >
            Contact Us
          </NavLink>

          {/* Login Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 lg:px-10 py-2 lg:py-4">
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-3 px-4 hover:bg-gray-100 rounded-md font-poppins ${
                  isActive ? "text-black font-medium" : "text-gray-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-3 px-4 hover:bg-gray-100 rounded-md font-poppins ${
                  isActive ? "text-black font-semibold" : "text-gray-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-3 px-4 hover:bg-gray-100 rounded-md font-poppins ${
                  isActive ? "text-black font-semibold" : "text-gray-700"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <div className="px-4 py-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 w-full">
                Log in
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
