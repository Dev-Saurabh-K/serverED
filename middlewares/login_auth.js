
import { User } from "../models/models.js";

const signin = async (req, res, next) => {

  try{
      const user = await User.find({
        username: req.body.username,
      });
      const { username, password} = user[0];
      // console.log(fullname,username)
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
