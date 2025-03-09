import React from "react";
import reports from "../assets/search-doctor.png";
import aiAnalyze from "../assets/search-doctor1.png";
import health from "../assets/search-doctor2.png";
import Element from "../assets/element.png";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload your reports",
      icon: (
        <div className="relative">
          <div className="rounded-md"></div>
          <div className=" rounded-md flex items-center justify-center font-poppins font-[600]">
            {/* <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg> */}
            <img src={reports} alt="reports" loading="lazy" />
          </div>
        </div>
      ),
    },
    {
      title: "AI Analyzes & Correlates",
      icon: (
        <div className="relative">
          <div className=" flex items-center justify-center">
            {/* <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
              />
            </svg> */}
            <img src={aiAnalyze} alt="ai-analyze" loading="lazy" />
          </div>
        </div>
      ),
    },
    {
      title: "Health Trends Insights",
      icon: (
        <div className="relative">
          <div className=" rounded-md flex items-center justify-center">
            {/* <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg> */}
            <img src={health} alt="search Image" loading="lazy" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-16 relative">
      <div className="absolute top-30 left-28 z-1 gap-4">
        <img src={Element} alt={Element} loading="lazy" />
      </div>
      <div className="absolute bottom-25 right-28 gap-4">
        <img src={Element} alt={Element} loading="lazy" />
      </div>

      <div className="max-w-7xl mx-auto relative md:px-8">
        <h1 className="text-center mb-8 font-poppins text-4xl font-[600]">
          How It Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div key={index} className=" flex flex-col items-center z-10">
              <div className="mb-6">{step.icon}</div>
              {/* <h3 className="text-lg font-semibold text-center">
                {step.title}
              </h3> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
