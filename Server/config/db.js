import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/weatherapp", );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;