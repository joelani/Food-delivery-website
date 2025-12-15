import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { motion } from "framer-motion";

const FoodDisplay = ({ category, limit = 8 }) => {
  const { food_list, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  const filteredFoods = food_list.filter(
    (item) => category === "All" || item.category === category
  );

  const displayedFoods = limit ? filteredFoods.slice(0, limit) : filteredFoods;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Top Dishes Near You</h2>

      <div className="grid grid-cols-4 gap-6 mt-6 max-md:px-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {displayedFoods.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 200, delay: index * 0.08 }}
            whileHover={{ scale: 1.05 }}
          >
            <FoodItem
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              quantity={cartItems[item._id] || 0}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              url={url}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
