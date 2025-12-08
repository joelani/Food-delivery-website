import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%] w-full fixed top-0 bg-white border-b-2 border-NeutralGray/55">
      <div>
        <img className="md:max-w-23 w-18" src={assets.logo} alt="" />
        <p className="text-gray-700 font-semibold text-sm md:text-lg">
          Admin Panel
        </p>
      </div>
      <img className="w-10" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
