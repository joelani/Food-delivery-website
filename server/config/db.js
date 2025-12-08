import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://joesbill:Olaniyi@cluster0.gdiufg4.mongodb.net/zesty-food"
    )
    .then(() => {
      console.log("DB connected successfully");
    });
};
