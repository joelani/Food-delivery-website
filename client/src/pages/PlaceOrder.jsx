import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    // Implement order placement logic here
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2, // Including delivery fee
    };
    let response = await axios.post(url + "/api/order/placeorder", orderData, {
      headers: { token, "Content-Type": "application/json" },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Failed to place order. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!token) {
      toast.success("Please login to place order");
      setTimeout(() => {
        navigate("/cart");
      }, 300);
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, []);

  return (
    <form
      onSubmit={placeOrder}
      className="my-20 py-10 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-between"
    >
      {/* Place order Left */}
      <div className="flex flex-col gap-6">
        <div className="  ">
          <h2 className="text-2xl font-bold mb-5">Delivery Information</h2>
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              required
              onChange={handleChange}
              name="first_name"
              value={data.first_name}
              type="text"
              className="p-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="First Name"
            />
            <input
              required
              onChange={handleChange}
              name="last_name"
              value={data.last_name}
              type="text"
              className=" p-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Last Name"
            />
          </div>
          <input
            required
            onChange={handleChange}
            name="email"
            value={data.email}
            type="email"
            className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
            placeholder="Email address"
          />
          <input
            required
            onChange={handleChange}
            name="street"
            value={data.street}
            type="text"
            className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
            placeholder="street"
          />
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              required
              onChange={handleChange}
              name="city"
              value={data.city}
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="City"
            />
            <input
              required
              onChange={handleChange}
              name="state"
              value={data.state}
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="State"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center">
            <input
              required
              onChange={handleChange}
              name="zip_code"
              value={data.zip_code}
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Zip code"
            />
            <input
              required
              onChange={handleChange}
              name="country"
              value={data.country}
              type="text"
              className="p-2 mt-2 border w-full border-NeutralGray rounded-md focus:outline-none focus:ring-1 focus:ring-Primary"
              placeholder="Country"
            />
          </div>
          <input
            required
            onChange={handleChange}
            name="phone"
            value={data.phone}
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
            type="submit"
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
