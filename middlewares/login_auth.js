import connectDB from "../models/db_config.js";
import { User } from "../models/models.js";

const signin = async (req, res, next) => {
  connectDB();

  try{
      const user = await User.find({
        username: req.body.username,
      });
      const { username, password } = user[0];
      if (username === req.body.username && password === req.body.password) {
        req.data=user[0];
        next();
      } else {
        res.send("Invalid Credentials!");
      }
  }catch(err){
    // console.log(err)
    res.send("Invalid Credentials!");
  }
};

export default signin;
