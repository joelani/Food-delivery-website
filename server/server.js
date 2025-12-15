import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import connectDB from "./config/db.js";

dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

//db connection would go here
connectDB();

// api endpoints.
app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Sample route
// app.get("/", (req, res) => {
//   res.send("API Working!");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
