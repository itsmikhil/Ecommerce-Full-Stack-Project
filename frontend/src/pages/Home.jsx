import React from "react";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Bestseller from "../components/Bestseller";
import Policies from "../components/Policies";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Latest />
      <Bestseller />
      <Policies />
      <Subscribe />
    </div>
  );
};

export default Home;
