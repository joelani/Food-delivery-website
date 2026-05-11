// import React from "react";
// import { assets } from "../assets/frontend_assets/assets";
// import { BikeIcon, SearchIcon } from "lucide-react";

// const HeroSection = () => {
//   return (
//     <section className="w-full relative min-h-[calc(100vh-80px)] md:px-16 px-6 py-30">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-50 bg-linear-to-br from-[#f8f7f3] to-[#f1f5f0] rounded-4xl">
//         {/* Left div Content */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-4xl md:text-5xl font-semibold font-plusJakarta text-primaryDark">
//             Your Favorite Meals, Right When You Want Them
//           </h1>
//           <p className="text-lg text-gray-600">
//             Experience the best food delivery service with a wide variety of
//             cuisines at your fingertips.
//           </p>
//           {/* Search */}
//           <form
//             className="flex items-center border gap-2 bg-white border-gray-200
//                            h-12 max-w-md w-full rounded-full overflow-hidden shadow-lg "
//           >
//             <input
//               type="text"
//               placeholder="Search for your favourite meal"
//               className="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-white-500"
//             />
//             <button
//               type="submit"
//               className="bg-primary active:scale-95 transition p-2 rounded-full text-sm text-white cursor-pointer mr-1"
//             >
//               <SearchIcon />
//             </button>
//           </form>

//           {/* Avatars */}
//           <div className="p-3 rounded-lg flex flex-row items-center gap-4">
//             <div className="flex flex-row justify-center -space-x-3 shadow-2xl">
//               <img
//                 className="size-8 rounded-full"
//                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
//                 alt="user1"
//               />
//               <img
//                 className="size-8 rounded-full"
//                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
//                 alt="user2"
//               />
//               <img
//                 className="size-8 rounded-full"
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
//                 alt="user3"
//               />
//             </div>
//             <p className="text-gray-700 text-sm md:text-[16px] leading-4">
//               Trusted by 12,000+ customers
//             </p>
//           </div>

//           {/* CTAs */}
//           <div className="flex gap-4">
//             <button className="px-6 py-3 rounded-full bg-primaryDark text-white font-semibold hover:bg-primaryDark/90 cursor-pointer transition">
//               Explore Menu
//             </button>
//           </div>
//         </div>
//         {/* Right div Content */}
//         <div className="relative flex items-center justify-center">
//           <div>
//             {/* Overlays and floating elements */}
//             <div className="absolute w-102 h-102 bg-green-300/30 blur-3xl rounded-full"></div>
//             <img
//               src={assets.lemon}
//               alt="Lemon"
//               className="absolute z-30 w-28 -top-5 -left-5 opacity-70"
//             />
//             <img
//               src={assets.chilli2}
//               alt="Chilli2"
//               className="absolute z-30 w-32 -top-2 -right-5 opacity-70 rotate-45"
//             />
//             <div className="absolute bottom-0 right-0 z-30 backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 w-fit">
//               <div className="flex items-center justify-center size-10 rounded-full bg-lime-400/20">
//                 {/* <span className="text-xl">🛵</span> */}
//                 <BikeIcon />
//               </div>

//               <div className="flex flex-col">
//                 <span className="text-xs text-gray-600 font-medium uppercase tracking-wide">
//                   Limited Offer
//                 </span>
//                 <p className="text-lg font-semibold text-gray-900">
//                   Free Delivery
//                 </p>
//               </div>
//             </div>
//           </div>
//           <img
//             src={assets.hero_img}
//             alt="Featured meal"
//             className="w-[430px] md:max-w-full h-auto object-cover drop-shadow-primaryDark/50 drop-shadow-2xl rotate-3"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/frontend_assets/assets";
import { BikeIcon, SearchIcon } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const popIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.85 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const HeroSection = () => {
  return (
    <section className="w-full relative min-h-[calc(100vh-80px)] md:px-16 px-6 py-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-50 bg-linear-to-br from-[#f8f7f3] to-[#f1f5f0] rounded-4xl">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <motion.h1
            {...fadeUp(0.05)}
            className="text-4xl md:text-5xl font-semibold font-plusJakarta text-primaryDark"
          >
            Your Favorite Meals, Right When You Want Them
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="text-lg text-gray-600">
            Experience the best food delivery service with a wide variety of
            cuisines at your fingertips.
          </motion.p>

          <motion.form
            {...fadeUp(0.25)}
            className="flex items-center border gap-2 bg-white border-gray-200 h-12 max-w-md w-full rounded-full overflow-hidden shadow-lg"
          >
            <input
              type="text"
              placeholder="Search for your favourite meal"
              className="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-primary active:scale-95 transition p-2 rounded-full text-sm text-white cursor-pointer mr-1"
            >
              <SearchIcon />
            </button>
          </motion.form>

          <motion.div
            {...fadeUp(0.35)}
            className="p-3 rounded-lg flex flex-row items-center gap-4"
          >
            <div className="flex flex-row justify-center -space-x-3 shadow-2xl">
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
              />
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
              />
              <img
                className="size-8 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="user3"
              />
            </div>
            <p className="text-gray-700 text-sm md:text-[16px] leading-4">
              Trusted by 12,000+ customers
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="flex gap-4">
            <button className="px-6 py-3 rounded-full bg-primaryDark text-white font-semibold hover:bg-primaryDark/90 cursor-pointer transition">
              Explore Menu
            </button>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          {...fadeRight(0.3)}
          className="relative flex items-center justify-center"
        >
          <div>
            <div className="absolute w-102 h-102 bg-green-300/30 blur-3xl rounded-full" />

            <motion.img
              {...popIn(0.55)}
              src={assets.lemon}
              alt="Lemon"
              className="absolute z-30 w-28 -top-5 -left-5 opacity-70"
            />
            <motion.img
              {...popIn(0.65)}
              src={assets.chilli2}
              alt="Chilli2"
              className="absolute z-30 w-32 -top-2 -right-5 opacity-70 rotate-45"
            />

            <motion.div
              {...fadeUp(0.75)}
              className="absolute bottom-0 right-0 z-30 backdrop-blur-xl bg-white/20 border border-white/30 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3 w-fit"
            >
              <div className="flex items-center justify-center size-10 rounded-full bg-lime-400/20">
                <BikeIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                  Limited Offer
                </span>
                <p className="text-lg font-semibold text-gray-900">
                  Free Delivery
                </p>
              </div>
            </motion.div>
          </div>

          <img
            src={assets.hero_img}
            alt="Featured meal"
            className="w-[430px] md:max-w-full h-auto object-cover drop-shadow-primaryDark/50 drop-shadow-2xl rotate-3"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
