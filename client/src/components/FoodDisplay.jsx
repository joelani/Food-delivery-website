import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Top Dishes Near You</h2>

      {/* food display */}
      <div className="grid grid-cols-4 gap-6 mt-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
