
import { Chats } from "../models/models.js";



const retriveChats=async(req,res,next)=>{

    const chatData=await Chats.find({username:req.params.user})
    console.log(chatData);
    req.data=chatData;
    next();
}

export default retriveChats;