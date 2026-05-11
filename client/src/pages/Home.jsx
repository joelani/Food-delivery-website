import React, { useState } from "react";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import AppDownload from "../components/AppDownload";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="w-full overflow-x-clip">
      <HeroSection />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
