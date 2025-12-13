/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { useEffect } from "react";
import axios from "axios";
import { assets } from "../assets/frontend_assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userOrders",
      {},
      {
        headers: { token, "Content-Type": "application/json" },
      }
    );

    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="pt-28 max-[900px]:pt-24 mb-48 px-4 md:px-16 lg:px-24 xl:px-32 max-w-[1440px] mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      {data.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div>
          {data.map((order, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] max-[900px]:grid-cols-[1fr_2fr_1fr] text-sm max-[900px]:text-[10px] items-center mt-7 py-2.5 px-5 text-[#454545] border border-gray-600 gap-7"
              >
                <img className="w-12.5" src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p className="font-medium text-[#454545]">
                  <span className="text-Primary">&#x25cf;</span>{" "}
                  <b>{order.status}</b>
                </p>
                <button
                  onClick={fetchOrders}
                  className="py-3 rounded-sm max-[900px]:text-[10px] cursor-pointer bg-green-200 text-[#454545]"
                >
                  Track order
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
