import connectDB from "../models/db_config.js";
import { User } from "../models/models.js";

const signup = async (req, res, next) => {
  await connectDB();

  const { username, password } = req.body;
  // console.log(username,password)

  //create new user
  const newUser = await User.create({
    username,
    password,
  });
  console.log(newUser);
  next();
};

export default signup;
