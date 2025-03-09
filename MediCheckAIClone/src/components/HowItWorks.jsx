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
