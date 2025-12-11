import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";

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
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

// Sample route
app.get("/", (req, res) => {
  res.send("API Working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//=mongodb+srv://joesbill:<db_password>@cluster0.gdiufg4.mongodb.net/?
