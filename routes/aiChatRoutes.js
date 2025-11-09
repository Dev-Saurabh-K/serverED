import express from "express";
import { chat } from "../ai/aiservice.js";
import { payload } from "../ai/utils/readimg.js";
// import { chat } from "../ai/aiservice.js";

// import multer from "multer";

// const upload=multer({dest: "uploads/"})


const router=express.Router();

router.post("/chat",async(req,res)=>{
    const response=await chat.sendMessage({
        message: req.body.user
    })
    console.log(req.body)
    console.log(response.text);
    res.send(response.text);
})

// router.post("/profile",upload.single("avatar"),async(req,res)=>{
//     res.send(req.file);
// })

router.get("/data",async(req,res)=>{
  const resp = await chat.sendMessage({
    message: payload,
  });
  res.send(resp.text);
})

export default router;