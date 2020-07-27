const Joi = require("@hapi/joi");

module.exports = {
  SignUpSchema: Joi.object().keys({
    username: Joi.string().required(),
    firstName: Joi.string().min(1).required(),
    otherName: Joi.string().min(1).required(),
    middleName: Joi.string(),
    displayName: Joi.optional(),
    password: Joi.string().min(5).required(),
  }),
  LoginSchema: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(5).required(),
  }),
  UpdateSchema: Joi.object().keys({
    username: Joi.string(),
    firstName: Joi.string(),
    otherName: Joi.string(),
    middleName: Joi.string(),
    displayName: Joi.string(),
  }),
};
