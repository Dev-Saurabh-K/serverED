// import connectDB from "./db_config"
import mongoose from "mongoose"

//signin
const userSchema=new mongoose.Schema({
    fullname:String,
    username:String,
    password:String,
    language:String
})

// const newUserSchema=new mongoose.Schema({
//     fullname:String,
//     username:String,
//     password:String,
//     language:String
// })

const User = mongoose.model("User", userSchema);
// const newUser=mongoose.model("newUser", newUserSchema);
export {User}