import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="pt-32 mb-48 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto">
      {/* -------- Cart Header -------- */}
      <div
        className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] items-center 
      text-gray-900 font-semibold text-lg mb-3"
      >
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="hidden md:block h-px bg-NeutralGray/55 border-none mb-4" />

      {/* -------- Cart Items -------- */}
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index} className="mb-4">
              {/* Desktop layout */}
              <div
                className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_0.5fr] 
              items-center text-gray-900 text-lg m-2.5"
              >
                <img
                  src={url + "/images/" + item.image}
                  alt=""
                  className="w-20 h-20 object-cover rounded-md"
                />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p
                  onClick={() => removeFromCart(item._id)}
                  className="cursor-pointer text-red-500 font-bold text-xl"
                >
                  ×
                </p>
              </div>
              {/* <hr className="hidden md:block h-px bg-NeutralGray/35 border-none" /> */}

              {/* Mobile layout */}
              <div className="md:hidden flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={url + "/images/" + item.image}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    {/* <p className="text-sm text-gray-600">${item.price}</p> */}
                    {/* <p className="font-semibold mt-1 text-gray-600">
                      ${item.price}
                    </p> */}
                    <p className="font-semibold mt-1">
                      ${item.price * cartItems[item._id]}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm">Qty: {cartItems[item._id]}</p>
                  {/* <p className="font-semibold mt-1">
                    ${item.price * cartItems[item._id]}
                  </p> */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-lg font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <hr className=" h-px bg-NeutralGray/35 border-none mt-0.5" />
            </div>
          );
        }
      })}

      {/* -------- Bottom Section -------- */}
      <div className="mt-20 flex flex-col lg:flex-row justify-between gap-10">
        {/* ----- Cart Totals ----- */}
        <div className=" w-full lg:w-1/2">
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
            onClick={() => navigate("/order")}
            className="w-1/2 mt-3 bg-Primary text-white py-3 rounded-lg text-lg max-md:text-sm
          font-semibold hover:bg-Primary/55 hover:cursor-pointer transition"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* ----- Promo Code ----- */}
        <div className="w-full lg:max-w-1/2 py-2 md:pl-16">
          <p className="font-medium mb-3 text-gray-800">
            If you have a promo code, enter it here:
          </p>

          <div className="flex items-center w-full  ">
            <input
              type="text"
              placeholder="Promo code"
              className="w-full border border-gray-300 px-4 py-[7px] rounded-l-lg focus:outline-none focus:ring-1 focus:ring-Primary"
            />

            <button
              className="bg-Primary text-white px-6 py-2 rounded-r-lg font-semibold 
            hover:bg-Primary/85 hover:cursor-pointer transition"
            >
              Submit
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            * Promo codes apply to eligible items only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
