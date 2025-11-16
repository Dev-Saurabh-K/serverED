import express from "express"
import signup from "../middlewares/signup.js";
import signin from "../middlewares/login_auth.js";
const router=express.Router();


router.post("/signup",signup,(req,res)=>{
    // console.log(req.body.username);

    res.send("signup")
})

router.post("/signin",signin,(req,res)=>{
    const{username}=req.data;
    console.log(req.data);
    // console.log(fullname);
    res.cookie("token", username, {
      httpOnly: true,     // JS on frontend can’t access (security)
      secure: false,      // true if using https
      sameSite: "lax",    // "strict" or "none" (if cross-site)
      maxAge: 1000 * 60 * 60, // 1 hour
    })
    res.json({username:req.body.username});
})



export default router;