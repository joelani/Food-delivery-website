import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//Placing order from frontend.
const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL;
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {},
    });

    const lineItems = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    lineItems.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100,
      },
      quantity: 1,
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.status(200).json({
      success: true,
      message: "Order placed successfully",
      session_url: session.url,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Error placing order", error });
    console.log("Error placing order:", error);
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res
        .status(200)
        .json({ success: true, message: "Order confirmed successfully" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Order cancelled successfully" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Error verifying order", error });
    console.log("Error verifying order:", error);
  }
};

//user orders for frontend
const userOrders = async (req, res) => {
  try {
    const order = await orderModel.find({ userId: req.body.userId });
    res
      .status(200)
      .json({ success: true, message: "User orders fetched", data: order });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching user orders",
    });
  }
};

//get all orders for admin dashboard
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error fetching orders",
    });
    console.log(error);
  }
};

// api for updating order status by admin
const updateStatus = async (req, res) => {
  try {
    // const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res
      .status(200)
      .json({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error updating order status",
    });
    console.log(error);
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
