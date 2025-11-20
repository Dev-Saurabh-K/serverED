import express from "express";
import { chat } from "../ai/aiservice.js";
import { payload } from "../ai/utils/readimg.js";
import addChat from "../middlewares/addChat.js";
import { Chats } from "../models/models.js";

import fs from "fs";
import multer from "multer";
//importing middleware
import requireAuth from "../middlewares/checkSession.js";


// const upload=multer({dest: "uploads/"})
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

function fileToGenerativePart(filePath, mimeType) {
  // 1. Read the file content from the disk into a Buffer
  const fileBuffer = fs.readFileSync(filePath);

  // 2. Convert the Buffer to a Base64 string
  const base64Data = fileBuffer.toString("base64");

  return {
    inlineData: {
      data: base64Data, // The Base64 string
      mimeType,
    },
  };
}

router.post("/chat/:user",requireAuth, upload.single("image"), async (req, res, next) => {
  if (req.file) {
    const filepath = req.file.path;
    console.log(filepath)
    const mimeType = req.file.mimetype;

    const imagePart = fileToGenerativePart(filepath, mimeType);

    const contents = [imagePart, { text: req.body.user }];
    console.log(req.file);
    console.log(req.body.user);

    var response = await chat.sendMessage({
      // message: req.body.user,
      // message: contents,
      message: contents,
    });
  }else{
    var response = await chat.sendMessage({
      message: req.body.user,
      // message: contents,
      // message: contents,
    });
  }

  // console.log(response.text);
  // res.send(response.text);
  req.data={
    "userMessage":req.body.user,
    "aiMessage":response.text
  }
  next();
},addChat);


router.get("/data",async (req, res) => {
  //ytest
  // const resp = await chat.sendMessage({
  //   message: payload,
  // });
  // console.log(req.cookies);

  //modifying test
  // res.send(resp.text);
  res.clearCookie('token')
  res.json({
    name: "Saurabh",
    team: "Explorers",
  });
});

router.post("/image/upload", upload.single("file"), (req, res) => {
  res.json({
    id: req.file,
  });
});

router.post("/session/create", async (req, res) => {
  try {
    const response = await chat.sendMessage({
      message: `make a one liner chat session heading for the given prompts "${req.body.firstline}". must return only one line.`,
    });

    // // Save heading in database
    // const updatedChat = await Chats.updateMany(
    //   { username: req.body.username },
    //   { $set: { chatSession: response.text } }
    // );

    // console.log("Updated:", updatedChat);

    // Send heading back to frontend
    res.send(response.text);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error generating heading");
  }
});


export default router;
