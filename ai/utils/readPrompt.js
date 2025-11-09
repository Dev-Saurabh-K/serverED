import fs from "fs";
import path from "path";

const filePath=path.resolve("./ai/data/prompt.txt");
const lokshayakPrompt=fs.readFileSync(filePath,"utf-8");

export default lokshayakPrompt;