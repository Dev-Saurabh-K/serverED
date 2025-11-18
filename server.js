import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./models/db_config.js";

import aiChatRoute from "./routes/aiChatRoutes.js";
import auth from "./routes/auth.js";
import data from "./routes/data.js"
// import imgrouter from "./routes/img.js";
import cookieParser from "cookie-parser";
// import requireAuth from "./middlewares/checkSession.js";
dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: ["https://lok-sahayak.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true })); //parse form data

app.use(express.json()); //parse json
app.use(cookieParser()); //parse cookies
app.use("/user", aiChatRoute);
app.use("/auth", auth);
app.use("/data",data);

// app.use("/img",imgrouter);

app.get("/", (req, res) => {
  res.send({ hi: "hi" });
});

app.listen(process.env.PORT);
