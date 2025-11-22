// import dotenv from "dotenv";
// dotenv.config();
import lokshayakPrompt from "./utils/readPrompt.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:`${process.env.GEMINI_API_KEY}`,});
// console.log(lokshayakPrompt)

async function main() {
    
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


  const response1 = await chat.sendMessage({
    message: "help me with rto",
  });
  console.log("Chat response 1:", response1.text);

  const response2 = await chat.sendMessage({
    message: "what is the purpose of it?",
  });
  console.log("Chat response 2:", response2.text);
  const response3 = await chat.sendMessage({
    message: "what will i have to fill in class 10 school code?",
  });
  console.log("Chat response 2:", response3.text);
}

await main();