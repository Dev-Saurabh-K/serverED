import fs from "fs";

const image_path = "./ai/data/image.png";

const imageBuffer = fs.readFileSync(image_path);

const payload = [
  {
    inlineData: {
      data: imageBuffer.toString("base64"),
      mimeType: "image/png",
    },
  },
  "whats is this?",
];

// console.log(payload);
export { payload }