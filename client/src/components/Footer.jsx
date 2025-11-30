import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 pt-20  md:px-16 lg:px-36 w-full text-gray-300 bg-PrimaryDark/95 ">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <img alt="" class="h-11" src={assets.logo} />
          <p className="mt-6 text-sm">
            Zesty is your go-to food delivery service, bringing a world of
            flavors right to your doorstep. Enjoy delicious meals from your
            favorite local restaurants with just a few clicks.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.play_store}
              alt="google play"
              className="h-10 w-auto border border-white rounded"
            />
            <img
              src={assets.app_store}
              alt="app store"
              className="h-10 w-auto border border-white rounded"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>contact@zesty.com</p>
            </div>
            {/* social icons */}
            <div className="flex justify-between items-center mt-3">
              <img
                src={assets.facebook_icon}
                alt=""
                className="w-9 hover:scale-95 cursor-pointer "
              />
              <img
                src={assets.linkedin_icon}
                alt=""
                className="w-9 hover:scale-95 cursor-pointer"
              />
              <img
                src={assets.twitter_icon}
                alt=""
                className="w-9 hover:scale-95 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://lani-portfolio.vercel.app">Lani</a>. All Right
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
