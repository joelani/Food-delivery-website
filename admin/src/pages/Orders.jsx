import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { assets } from "../assets/admin_assets/assets";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      console.log("Failed to fetch orders");
      toast.error("Failed to fetch orders");
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="w-[80%] ml-16 md:ml-64 p-5 mt-5 ">
      <h1 className="text-3xl font-semibold mb-5">All Orders</h1>
      <div className="overflow-x-auto">
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr]
 lg:gap-7.5 gap-4  items-start border border-Primary p-4 max-md:p-2.5 my-6 font-semibold text-[#505050] text-xs lg:text-sm "
          >
            <img
              className="max-w-[1000px]:w-10"
              src={assets.parcel_icon}
              alt=""
            />
            <div>
              <p className="font-semibold">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="font-semibold mt-6 mb-1.5">
                {order.address.first_name + " " + order.address.last_name}
              </p>
              <div className="flex flex-wrap gap-1 mb-2.5">
                <p cl>{order.address.street + ", "}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zip_code}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p className="-mr-3 lg:ml-0 font-bold text-[14px]">
              $ {order.amount}
            </p>
            <select
              name=""
              id=""
              className="bg-Primary/20 p-2 outline-none border border-Primary max-w-[1000px]:p-2.5 max-w-[1000px]:text-sm"
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
