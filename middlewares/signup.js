
import { User } from "../models/models.js";

const signup = async (req, res, next) => {

  const { fullname, username, password, language } = req.body;
  console.log(username,password, fullname, language)

  //create new user
  const newUser = await User.create({
    fullname,
    username,
    password,
    language
  });
  console.log(newUser);
  next();
};

export default signup;
