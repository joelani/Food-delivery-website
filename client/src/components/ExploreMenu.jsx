import React from "react";
import { menu_list } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section className="w-full ">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold font-plusJakarta">
          Explore Our Menu
        </h1>
        <p className="md:max-w-3/5 w-full pr-6 text-gray-800 text-lg">
          Discover freshly prepared meals crafted to satisfy every craving. From
          local favorites to global flavors, every dish is made to elevate your
          dining experience.
        </p>

        <motion.div
          className="flex justify-between items-center gap-3.5 text-center md:mx-10 mx-2 overflow-x-scroll explore-menu-list mt-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {menu_list.map((item, index) => (
            <motion.div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              className="exploremenulistitem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.menu_image}
                className={`w-[7vw] min-w-18 cursor-pointer rounded-full transition duration-200 ${
                  category === item.menu_name ? "active" : ""
                } `}
                alt={item.menu_name}
              />
              <p className="mt-2 text-gray-800 font-plusJakarta text-sm md:text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <hr className="my-2 h-0.5 bg-NeutralGray/60 border-none" />
      </div>
    </section>
  );
};

export default ExploreMenu;
