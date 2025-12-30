import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Policies = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12 px-6 md:px-24 py-20 text-center">
      <div className="flex flex-col items-center gap-4">
        <img src={assets.exchange_icon} alt="" />
        <h1 className="font-medium">Easy Exchange</h1>
        <p className="text-sm text-gray-500">
          Hassle free exchange policy
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <img src={assets.quality_icon} alt="" />
        <h1 className="font-medium">7 Days Return</h1>
        <p className="text-sm text-gray-500">
          Free returns within 7 days
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <img src={assets.support_img} alt="" />
        <h1 className="font-medium">24/7 Support</h1>
        <p className="text-sm text-gray-500">
          Always here to help you
        </p>
      </div>
    </div>
  );
};

export default Policies;
