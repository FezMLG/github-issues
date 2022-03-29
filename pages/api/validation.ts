import Joi from "joi";

export const searchSchema = Joi.object({
  inputString: Joi.string()
    .alphanum()
    .min(1)
    .max(50)
    .required(),
  perPage: Joi.number().min(2).max(100).required(),
})

export const userSchema = Joi.object({
  userNickname: Joi.string()
    .alphanum()
    .min(1)
    .max(50)
    .required(),
})