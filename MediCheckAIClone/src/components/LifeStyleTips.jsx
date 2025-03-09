import React from "react";
import LifeStyleTipsImage from "../assets/lifestyle-tips.png";

export default function LifestyleTips() {
  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center md:px-8">
        <div className="order-1 md:order-1">
          <div className="text-gray-500 mb-2 font-roboto font-medium text-xl md:text-2xl">
            Lifestyle Tips
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 font-poppins font-semibold">
            Tailored dietary and exercise suggestions
          </h2>
          <div className="w-10 md:w-14 h-0.5 bg-black rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-500 mb-4 font-roboto font-light text-base md:text-xl lg:text-2xl leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="relative order-2 md:order-2 mt-6 md:mt-0">
          <img
            src={LifeStyleTipsImage}
            alt="Lifestyle Tips"
            className="w-full h-auto "
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
