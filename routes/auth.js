import express from "express"
import signup from "../middlewares/signup.js";
import signin from "../middlewares/login_auth.js";
const router=express.Router();


router.post("/signup",signup,(req,res)=>{
    // console.log(req.body.username);

    res.send("signup")
})

router.post("/signin",signin,(req,res)=>{
    console.log(req.data);
    res.send(req.body.username);
})



export default router;