import mongoose from "mongoose";

const url =
  "mongodb+srv://saurabh:9934061210@cluster0.rcaumej.mongodb.net/?appName=Cluster0";

const connectDB= async() => {
  try {
    await mongoose.connect(url);
    console.log("connected to mongodb");

  } catch (err) {
    console.log(err);
  }
};

export default connectDB