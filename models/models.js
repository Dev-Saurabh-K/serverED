// import connectDB from "./db_config"
import mongoose from "mongoose"

//signin
const userSchema=new mongoose.Schema({
    fullname:String,
    username:String,
    password:String,
    language:String
})

const userChats=new mongoose.Schema({
    username:String,
    userMessage:String,
    aiMessage:String
})

// const newUserSchema=new mongoose.Schema({
//     fullname:String,
//     username:String,
//     password:String,
//     language:String
// })

const User = mongoose.model("User", userSchema);
const Chats=mongoose.model("chats",userChats);
// const newUser=mongoose.model("newUser", newUserSchema);
export {User, Chats}