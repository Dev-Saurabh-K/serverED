import express from "express";
import { chat } from "../ai/aiservice.js";
import { payload } from "../ai/utils/readimg.js";

// import { chat } from "../ai/aiservice.js";

import multer from "multer";

// const upload=multer({dest: "uploads/"})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const router = express.Router();

router.post("/chat",async(req,res)=>{
    const response=await chat.sendMessage({
        message: req.body.user
    })
    console.log(req.body)
    console.log(response.text);
    res.send(response.text);
})

// router.post("/chat", upload.single("image"), async (req, res) => {
//   try {
//     console.log("Text:", req.body.user);
//     console.log("File:", req.file);

//     const response = await chat.sendMessage({
//       // message: req.body.user
//       message: [
//         { type: "text", text: "your message" },
//         { type: "image", image: imageBase64 },
//       ],
//     });

//     console.log("AI:", response.text);

//     res.send({
//       message: response.text,
//       // file: req.file ? req.file.filename : null,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server error");
//   }
// });
// router.post("/chat", upload.single("image"), async (req, res) => {
//     try {
//         console.log("Text:", req.body.user);
//         console.log("File:", req.file);

//         let imageBase64 = null;

//         // If an image is uploaded, convert to base64
//         if (req.file) {
//             imageBase64 = req.file.buffer.toString("base64");
//         }

//         // Prepare AI input
//         const aiInput = [
//             { type: "text", text: req.body.user }
//         ];

//         if (imageBase64) {
//             aiInput.push({
//                 type: "image",
//                 image: imageBase64
//             });
//         }

//         // Send text + image to AI
//         const response = await chat.sendMessage({
//             message: aiInput
//         });

//         console.log("AI:", response.text);

//         res.send({
//             message: response.text,
//             file: req.file ? req.file.originalname : null
//         });

//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Server error");
//     }
// });


// router.post("/profile",upload.single("avatar"),async(req,res)=>{
//     res.send(req.file);
// })

router.get("/data", async (req, res) => {
  //ytest
  // const resp = await chat.sendMessage({
  //   message: payload,
  // });
  // console.log(req.cookies);

  //modifying test
  // res.send(resp.text);

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

export default router;
