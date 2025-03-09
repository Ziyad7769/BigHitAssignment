import React from "react";
import Vector from "../assets/Vector.png";
import LineBelowLamp from "../assets/linebelowlamp.png"
import CircuitAnimation from "./AnimatedComponent";
import LampBase from "../assets/lampbase.png"
import LampTop from "../assets/lamptop.png"

export default function Hero() {
  return (
    <div>
      <div className="absolute top-15 right-0 -z-15">
        <img src={Vector} alt="Health Dashboard" width={859} />
      </div>
      <section className="w-full py-16 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8">
          {/* Left Section - Text & Button */}
          <div className="z-10 mt-20">
            <h1 className="text-4xl md:text-[64px] font-semibold text-black mb-2 font-poppins">
              Your Health, <br />
              <span className="text-orange-500">Simplified!</span>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-DbkaoC8HnxiDNo8TLtjE9kwhmsUrJD.png"
                alt="Health Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Blue stats card */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:-bottom-67 md:-left-10 md:translate-x-0 z-20 w-[140px] md:w-[270px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20%281%29-bsWCohT6AIYnzaoyKOBIV1nnK2ryDP.png"
                alt="Health Stats"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-68 -right-28 z-40 ">
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
            {/* <div className="absolute -bottom-68 -right-35 z-29 w-[180px] md:w-[450px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20%282%29-GYzKcet33ETIoBM6gJ22qpSmKqUV86.png"
                alt="AI Technology"
                className="w-full h-auto"
              />
            </div> */}

            {/* Curved line */}
            <div className="absolute top-97 left-65 z-50 w-[200px] md:w-[250px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20%283%29-x2GkTVL6cnXgykkxQ6JyXY7n9xq92J.png"
                alt="Decorative Line"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute -bottom-66 right-0 -z-14 w-[200px] md:w-[858px]">
        <img
          src={LineBelowLamp}
          alt="Decorative Line"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
