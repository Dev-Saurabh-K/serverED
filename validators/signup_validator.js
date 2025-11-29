import Joi from "joi";

//joi validaton for signup
const signupSchema = Joi.object({
  fullname: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.min": "Full name must be at least 3 characters",
      "string.max": "Full name must be less than 50 characters",
      "any.required": "Full name is required",
    }),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.alphanum": "Username must be alphanumeric",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username must be less than 30 characters",
      "any.required": "Username is required",
    }),

  language: Joi.string()
    .valid("en", "hi", "fr", "es") // allowed languages list or update this part as per the requirement
    .required()
    .messages({
      "any.only": "Invalid language selection",
      "any.required": "Language is required",
    }),

  password: Joi.string()
    .min(8)
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])"))
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "string.pattern.base":
      "Password must contain uppercase, lowercase, and number",
      "any.required": "Password is required",
    }),
});

export {signupSchema}