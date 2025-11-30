import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div>
      {/* App download section */}
      <div className="bg-PrimaryDark text-white rounded-lg p-8 flex flex-col items-center justify-between mt-20 mx-auto max-w-4xl mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          Download the Zesty App Now!
        </h2>
        <p className="mb-6 text-center max-w-lg">
          Get exclusive deals, track your orders in real-time, and enjoy a
          seamless food delivery experience right from your phone.
        </p>
        <div className="flex gap-4">
          <img
            src={assets.play_store}
            alt="Google Play Store"
            className="h-12 w-auto cursor-pointer hover:scale-105 transition duration-400"
          />
          <img
            src={assets.app_store}
            alt="Apple App Store"
            className="h-12 w-auto cursor-pointer hover:scale-105 transition duration-400"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
