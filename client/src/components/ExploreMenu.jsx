import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-3 mt-8 text-PrimaryDark">
      <h1 className=" text-2xl font-semibold">Explore Our Menu</h1>
      <p className="md:max-w-3/5 w-full pr-6 text-PrimaryDark/80 text-lg">
        Choose from a diverse menu featuring a delectable array of dishes, Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-3.5 text-center md:mx-10 mx-2 overflow-x-scroll explore-menu-list mt-2">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="exploremenulistitem"
            >
              <img
                src={item.menu_image}
                className={`w-[7.5vw] min-w-20  cursor-pointer rounded-full transition duration-200 ${
                  category === item.menu_name ? "active" : ""
                } `}
                alt={item.menu_name}
              />
              <p className="mt-2 text-PrimaryDark text-lg md:text-xl cursor-pointer ">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 h-0.5 bg-NeutralGray/60 border-none " />
    </div>
  );
};

export default ExploreMenu;
