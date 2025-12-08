import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:w-60 h-screen py-4 border-[1.5px] border-NeutralGray/75 border-t-0 text-md md:text-md ">
      {/* Sidebar content goes here */}
      <div className="pt-12 pl-[20%] flex flex-col gap-5">
        <NavLink
          to="/add"
          className="flex items-center gap-3 border border-r-0 border-NeutralGray/75 py-2 px-2.5 rounded-l-sm cursor-pointer"
        >
          <img src={assets.add_icon} alt="" />
          <p className="max-md:hidden font-semibold text-gray-700">Add Items</p>
        </NavLink>
        <NavLink
          to="/list"
          className="flex items-center gap-3 border border-r-0 border-NeutralGray/75 py-2 px-2.5 rounded-l-sm cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-md:hidden font-semibold text-gray-700">
            List Items
          </p>
        </NavLink>
        <NavLink
          to="/orders"
          className="flex items-center gap-3 border border-r-0 border-NeutralGray/75 py-2 px-2.5 rounded-l-sm cursor-pointer"
        >
          <img src={assets.order_icon} alt="" />
          <p className="max-md:hidden font-semibold text-gray-700">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
