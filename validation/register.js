import Joi from "joi";

export const registerValidation = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  // phoneNumber: Joi.number(),
  // role: Joi.string().required(),
  email: Joi.string().email().min(3).max(70).lowercase().required(),
  
  password: Joi.string().min(5).required(),
});

export default registerValidation;
