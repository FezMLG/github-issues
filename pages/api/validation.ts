import Joi from "joi";

export const schema = Joi.object({
  inputString: Joi.string()
    .alphanum()
    .min(1)
    .max(50)
    .required(),
  perPage: Joi.number().min(1).max(100).required(),
})