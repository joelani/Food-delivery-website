import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto">
      <div className=" w-full bg-[url('/hero_imgg.png')] min-h-[450px] p-9 bg-cover bg-center bg-no-repeat rounded-2xl relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 gap-6 md:gap-0 ">
        <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/15 to-transparent rounded-2xl"></div>

        {/* Hero Content */}
        <motion.div
          className="text-center md:text-left max-w-lg absolute bottom-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-BackgroundLight mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Delicious Meals, Delivered To You
          </motion.h1>
          <motion.p
            className="text-BackgroundLight max-w-96 text-lg text-shadow-PrimaryDark text-shadow-xs md:text-xl mb-6 px-6 md:px-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Experience the best food delivery service with a wide variety of
            cuisines at your fingertips.
          </motion.p>
          <motion.button
            className="bg-BackgroundLight/95 text-PrimaryDark px-6 py-3 rounded-full hover:bg-BackgroundLight/80 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
