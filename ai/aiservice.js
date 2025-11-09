// import dotenv from "dotenv";
// dotenv.config();
import lokshayakPrompt from "./utils/readPrompt.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAViTn0nt4HFsKx2QyspS26FwJPq77demc",
});
// console.log(lokshayakPrompt)

const chat = ai.chats.create({
  model: "gemini-2.5-flash-lite",
  history: [
    {
      role: "model",
      parts: [{ text: lokshayakPrompt }],
    },
    //   {
    //     role: "model",
    //     parts: [{ text: "Great to meet you. What would you like to know?" }],
    //   },
  ],
});

export { chat };
