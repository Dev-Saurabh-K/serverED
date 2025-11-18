import express from "express"
import requireAuth from "../middlewares/checkSession.js"
import retriveChats from "../middlewares/retriveChats.js";
import addChat from "../middlewares/addChat.js";

const router=express.Router();


//retrive all chat for specific user
router.get("/chats/:user",requireAuth,retriveChats,(req,res)=>{
    console.log(req.params.user);
    res.send(req.data);
})

// //for each chat
// router.post("/chats/save/:user",requireAuth,addChat,(req,res)=>{
//     console.log(req.params.user);
//     res.send(req.data);
// })


export default router;