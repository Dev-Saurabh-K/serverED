import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";
import aiChatRoute from "./routes/aiChatRoutes.js";
import auth from "./routes/auth.js";
// import imgrouter from "./routes/img.js";
dotenv.config();
const app=express()

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/user",aiChatRoute);
app.use("/auth",auth);
// app.use("/img",imgrouter);

app.get('/',(req,res)=>{
    res.send({"hi":"hi"});
});

app.listen(process.env.PORT);
