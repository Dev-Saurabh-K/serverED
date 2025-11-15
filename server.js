import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import aiChatRoute from "./routes/aiChatRoutes.js";
import auth from "./routes/auth.js";
// import imgrouter from "./routes/img.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "https://lok-sahayak.vercel.app/",
    credentials:true
  })
);
app.use(express.urlencoded({ extended: true }));    //parse form data

app.use(express.json());       //parse json
app.use(cookieParser());       //parse cookies
app.use("/user", aiChatRoute);
app.use("/auth", auth);

// app.use("/img",imgrouter);

app.get("/", (req, res) => {
  res.send({ hi: "hi" });
});

app.listen(process.env.PORT, "0.0.0.0");
