import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { motion } from "framer-motion";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Top Dishes Near You</h2>

      {/* food display */}
      <div className="grid grid-cols-4 gap-6 mt-6 max-md:px-6 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <FoodItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
