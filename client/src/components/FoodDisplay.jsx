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

      <motion.div
        className="grid grid-cols-4 gap-6 mt-6 max-md:px-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {displayedFoods.map((item) => (
          <motion.div
            key={item._id}
            layout
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", stiffness: 200 }}
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
      </motion.div>
    </div>
  );
};

export default FoodDisplay;
