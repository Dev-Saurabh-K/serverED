import express from "express";
import requireAuth from "../middlewares/checkSession.js";
import retriveChats from "../middlewares/retriveChats.js";
import addChat from "../middlewares/addChat.js";
import retriveSessions from "../middlewares/retriveSessions.js";
import { Chats } from "../models/models.js";

const router = express.Router();

//retrive all chat for specific user
router.get("/chats/:user", requireAuth, retriveChats, (req, res) => {
  console.log(req.params.user);
  res.send(req.data);
});

// //for each chat
// router.post("/chats/save/:user",requireAuth,addChat,(req,res)=>{
//     console.log(req.params.user);
//     res.send(req.data);
// })

router.post("/session/create", async (req, res) => {
    console.log(req.body);
  const chat = await Chats.updateOne(
    {
      username: req.body.username,
      userMessage: req.body.userMessage,
      aiMessage: req.body.aiMessage,
    },
    {
      $set: {
        chatSession: req.body.chatSession,
      },
    }
  );
  res.send(chat);
});

router.post("/sessions/:user", retriveSessions, (req, res) => {
  console.log(req.params.user);
  res.send(req.data);
});


export default router;
