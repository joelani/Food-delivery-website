import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import connectDB from "./config/db.js";
import healthRouter from "./routes/health.js";

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
app.use("/api", healthRouter);

// Sample route
// app.get("/", (req, res) => {
//   res.send("API Working!");
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import ownerRouter from "./routes/ownerRoutes.js";
// import bookingRouter from "./routes/bookingRoute.js";

// // Initiallize Express App
// const app = express();

// // connect Database
// await connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("Server is running"));
// app.use("/api/user", userRouter);
// app.use("/api/owner", ownerRouter);
// app.use("/api/bookings", bookingRouter);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
