import React from "react";

const Subscribe = () => {
  return (
    <div className="py-24 flex flex-col items-center gap-10 text-center">
      <div>
        <h1 className="text-4xl font-medium">
          Subscribe & get 20% off
        </h1>
        <p className="text-gray-500 mt-2">
          No spam. Just exclusive offers.
        </p>
      </div>

      <div className="flex w-[90%] md:w-[40%] border border-gray-300">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full px-4 py-3 outline-none"
        />
        <button className="bg-black text-white px-8">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
