import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Database connection failed`, error);
  }
};

export default connectDB;
