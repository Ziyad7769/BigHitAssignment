import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MediCheck.AI.png";

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 px-4 md:px-16 bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="max-w-7xl mx-auto flex flex-col h-full">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 mb-8 md:mb-12">
          {/* Left Column - Logo and Text */}
          <div className="w-full md:w-1/2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt={logo} />
            </Link>
            <p className="text-white max-w-md">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row md:justify-end items-start md:items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full md:w-auto">
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
        <div className="mt-auto">
          <p className="text-white/70 text-sm">
            ©MediCheck.AI 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
