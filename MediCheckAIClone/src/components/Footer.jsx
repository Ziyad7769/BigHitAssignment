import React from "react";
import { Link } from "react-router-dom";
import Element from "../assets/Element.png"

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 px-4 md:px-16 bg-gradient-to-r from-blue-400 to-blue-500 md:h-[400px] relative">
        <div className="hidden md:block absolute top-10 -left-8 gap-4">
                <img src={Element} alt={Element} loading="lazy" />
              </div>
        <div className="absolute -top-17 right-10 gap-4">
                <img src={Element} alt={Element} loading="lazy" />
              </div>
      <div className="max-w-7xl mx-auto flex flex-col h-full md:px-8 justify-center ">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 mb-8 md:mb-12">
          {/* Left Column - Logo and Text */}
          <div className="w-full md:1/2">
            <Link to="/" className="inline-block mb-4">
              {/* <img src={logo} alt={logo} loading="lazy" /> */}
              <span className="text-black font-poppins font-extrabold text-5xl">MediCheck.<span className="text-blue-700">AI</span></span>
            </Link>
            <p className="text-white max-w-md mt-8 font-roboto">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center font-poppins font-bold">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full md:w-auto whitespace-nowrap">
              <Link
                to="/about"
                className="text-white hover:text-white/80 font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-white/80 font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="text-white hover:text-white/80 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white hover:text-white/80 font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright at Bottom */}
        <div className="mt-4">
          <p className="text-white/70 text-base font-roboto font-[300]">
            ©MediCheck.AI 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
