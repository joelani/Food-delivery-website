import React, { useState } from "react";
import Hero from "../components/Hero";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";
// import App from "../App";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="bg-BackgroundLight px-4 md:px-16 lg:px-24 xl:px-32 py-4 pt-30 max-w-[1440px] mx-auto">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
