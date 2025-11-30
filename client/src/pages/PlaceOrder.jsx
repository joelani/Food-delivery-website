import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="my-20 py-10 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
      {/* Place order Left */}
      <div className="flex flex-col gap-6">
        <div className="  ">
          <h2 className="text-2xl font-bold mb-5">Delivery Information</h2>
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              type="text"
              className="p-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="First Name"
            />
            <input
              type="text"
              className=" p-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
            placeholder="Email address"
          />
          <input
            type="text"
            className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
            placeholder="street"
          />
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="City"
            />
            <input
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="State"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Zip code"
            />
            <input
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Country"
            />
          </div>
          <input
            type="text"
            className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
            placeholder="phone"
          />
        </div>
      </div>

      {/* Place order Right */}
      <div className="md:w-2/3 w-full ml-auto">
        {/* ----- Cart Totals ----- */}
        <div className=" w-full">
          <h2 className="text-2xl font-bold mb-5">Cart Totals</h2>

          <div className="flex justify-between py-3">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr className="h-px bg-NeutralGray/55 border-none" />

          <div className="flex justify-between py-3">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="h-px bg-NeutralGray/55 border-none" />

          <div className="flex justify-between py-3 font-semibold text-lg">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>

          <button
            className=" mt-3 bg-Primary text-white py-2 px-6 rounded-md text-md max-md:text-sm
          font-semibold hover:bg-Primary/55 hover:cursor-pointer transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
