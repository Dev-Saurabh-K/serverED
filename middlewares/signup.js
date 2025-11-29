
import { User } from "../models/models.js";
import { signupSchema } from "../validators/signup_validator.js";

const signup = async (req, res, next) => {

  //joi validates the req.body
   const { error, value } = signupSchema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false, // this will block extra fields
    });

    if (error) {
      return res.status(400).json({
        success: false,
        errors: error.details.map((err) => err.message),
      });
    }

    // validation done
    const { fullname, username, password,language } = value;

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
