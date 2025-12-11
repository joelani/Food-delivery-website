import express from "express";
import {
  addToCart,
  getCartData,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/get", authMiddleware, getCartData);
cartRouter.post("/remove", authMiddleware, removeFromCart);

export default cartRouter;
