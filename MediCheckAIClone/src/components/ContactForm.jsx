import React from "react";
import { Mail, MessageSquare, User } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="flex-1 w-full py-16 px-6 md:px-16 bg-gradient-to-r from-blue-400 to-blue-500 relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute top-8 left-8 grid grid-cols-5 grid-rows-5 gap-4 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={`top-${i}`} className="w-2 h-2 rounded-full bg-white"></div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 grid grid-cols-5 grid-rows-5 gap-4 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-2 h-2 rounded-full bg-white"
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-black/80 max-w-2xl mx-auto">
            Have questions about MediCheck.AI? We're here to help. Fill out the
            form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg relative">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-black font-medium block">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
                    <User size={18} />
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-black font-medium block">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-black font-medium block"
                >
                  Subject
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
                    <MessageSquare size={18} />
                  </div>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-black font-medium block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 rounded-lg resize-y min-h-[120px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 text-black/80">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="mt-1">support@medicheck.ai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <p className="mt-1">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Address</h4>
                  <p className="mt-1">
                    123 Health Avenue, Medical District, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Hours</h4>
                  <p className="mt-1">Monday - Friday, 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-200/30">
              <h4 className="font-semibold text-black mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
