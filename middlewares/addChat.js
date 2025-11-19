
import { Chats } from "../models/models.js";


const addChat=async(req,res)=>{

    const {userMessage,aiMessage}=req.data;
    const currentChatData=await Chats.create({
        username:req.params.user,
        userMessage:userMessage,
        aiMessage:aiMessage
    });
    // console.log(currentChatData);

    res.send(currentChatData);
    
}

export default addChat;