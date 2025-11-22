import mongoose from "mongoose";

const url =`${process.env.MONGO_URI}`;

const connectDB= async() => {
  try {
    await mongoose.connect(url);
    console.log("connected to mongodb");

  } catch (err) {
    console.log(err);
  }
};

export default connectDB