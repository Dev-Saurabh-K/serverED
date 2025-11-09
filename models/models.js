// import connectDB from "./db_config"
import mongoose from "mongoose"

//signup
const userSchema=new mongoose.Schema({
    username:String,
    password:String
})

const User = mongoose.model("User", userSchema);
export {User}