import mongoose from "mongoose";

const connectDB = async () => {
  // await mongoose.connect(process.env.MONGODB_URI);
  // console.log("DB connected successfully");
  try {
    mongoose.connection.on("connected", () =>
      console.log("DB connected successfully")
    );
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
