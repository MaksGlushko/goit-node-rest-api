import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
export const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});