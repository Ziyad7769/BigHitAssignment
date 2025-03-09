import React from "react";
import CommunitySupportImage from "../assets/community.png";

export default function CommunitySupport() {
  return (
    <section className="w-full px-4 py-12 sm:py-16 sm:px-6 md:px-8 lg:px-16 mb-16 sm:mb-24 md:mb-32 lg:mb-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content - First on Mobile, Second on Desktop */}
        <div className="order-1 lg:order-2">
          <div className="text-gray-500 mb-2 font-roboto font-medium text-xl sm:text-2xl leading-tight">
            Community Support
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] mb-4 font-poppins font-semibold leading-tight w-full md:max-w-lg">
            Peer interactions and discussions
          </h2>
          <div className="w-14 h-0.5 bg-black rounded-[10px] mb-4 sm:mb-6"></div>
          <p className="text-gray-500 mb-8 font-roboto font-light text-lg sm:text-xl md:text-2xl leading-relaxed w-full md:max-w-lg">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Image - Second on Mobile, First on Desktop */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
          <img
            src={CommunitySupportImage}
            alt="Community Support"
            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
