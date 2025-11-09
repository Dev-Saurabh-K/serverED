import { payload } from "./utils/readimg.js";
import { chat } from "./aiservice.js";


const img = async () => {
  const res = await chat.sendMessage({
    message: payload,
  });
  console.log(res.text);
  return (res.text);
};
// console.log(img);


// export{img}
