import React from "react";
import Vector from "../assets/Vector.png";
import LineBelowLamp from "../assets/linebelowlamp.png";
import CircuitAnimation from "./AnimatedComponent";
import LampBase from "../assets/lampbase.png";
import LampTop from "../assets/lamptop.png";
import Dashboard from "../assets/Group.png";
import BlueStatsCard from "../assets/Group1.png";
import CurvedLine from "../assets/Group3.png";
import Lamp from "../assets/Group2.png";

export default function Hero() {
  return (
    <div>
      <div className="hidden md:flex absolute top-15 right-0 -z-15">
        <img src={Vector} alt="Health Dashboard" width={859} />
      </div>
      <section className="w-full py-16 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:px-8">
          {/* Left Section - Text & Button */}
          <div className="z-10 mt-20">
            <h1 className="text-4xl md:text-[64px] font-semibold text-black mb-2 font-poppins">
              Your Health, <br />
              <span className="bg-gradient-to-r from-[#CD6028] via-[#CD6028] via-11% to-[#3E6EB4] text-transparent bg-clip-text">
                Simplified!
              </span>
            </h1>
            <p className="text-black mb-8 max-w-lg text-lg md:text-2xl pr-10 opacity-80 font-roboto">
              Upload prescriptions and diagnostic reports to get actionable
              insights powered by AI.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-[60px] px-12 py-2 transition-all duration-300">
              Upload Now
            </button>
          </div>

          {/* Right Section - Images */}
          <div className="relative h-[300px] md:h-[400px]">
            {/* Main dashboard UI */}

            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-15 w-[280px] md:w-[602px]">
              <img
                src={Dashboard}
                alt="Health Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Blue stats card */}
            <div className="absolute -bottom-6 left-15 -translate-x-1/2 md:-bottom-67 md:-left-10 md:translate-x-0 z-20 w-[140px] md:w-[270px]">
              <img
                src={BlueStatsCard}
                alt="Health Stats"
                className="w-full h-auto"
              />
            </div>

            <div className="hidden md:flex absolute -bottom-68 -right-28 z-40 ">
              <div className="mb-17">
                <CircuitAnimation />
              </div>
              <img
                src={LampTop}
                alt={LampTop}
                className="absolute bottom-16.5 right-25 z-50"
              />
              <img
                src={LampBase}
                alt={LampBase}
                className="z-60 absolute bottom-0 right-13.5"
              />
            </div>

            {/* AI visualization */}
            <div className="block md:hidden absolute -bottom-6 -right-10  md:-bottom-68 md:-right-35 z-29 w-[250px] md:w-[450px]">
              <img src={Lamp} alt="AI Technology" className="w-full h-auto" />
            </div>

            {/* Curved line */}
            <div className="absolute top-45 left-35 md:top-97 md:left-65 z-50 w-[125px] md:w-[250px]">
              <img
                src={CurvedLine}
                alt="Decorative Line"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="hidden md:flex absolute -bottom-66 right-0 -z-14 w-[200px] md:w-[858px]">
        <img
          src={LineBelowLamp}
          alt="Decorative Line"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
