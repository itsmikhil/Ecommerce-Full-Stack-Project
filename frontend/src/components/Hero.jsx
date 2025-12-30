import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-24 py-12">
      <div className="grid md:grid-cols-2 border border-gray-200">
        <div className="flex flex-col justify-center px-8 md:px-16 gap-4">
          <h1 className="uppercase tracking-widest text-sm text-gray-500 flex items-center gap-3">
            <span className="w-10 h-[1px] bg-gray-400"></span>
            Our Bestsellers
          </h1>

          <h1 className="font-[prata] text-4xl md:text-6xl text-gray-800 leading-tight">
            Latest Arrivals
          </h1>

          <button className="mt-6 w-fit uppercase tracking-wider text-sm border-b border-black pb-1">
            Shop Now
          </button>
        </div>

        <div className="bg-[#f6d6d3] flex items-center justify-center">
          <img
            src={assets.hero_img}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
