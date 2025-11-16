import connectDB from "../models/db_config.js";
import { User } from "../models/models.js";

const signup = async (req, res, next) => {
  await connectDB();

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
