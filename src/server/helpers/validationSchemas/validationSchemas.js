const Joi = require("@hapi/joi");

module.exports = {
  profileSchema: Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.array()
      .items(
        Joi.string()
          .lowercase()
          .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)
          .required()
      )
      .required(),
    phone: Joi.array()
      .items(
        Joi.string()
          .regex(/([0-9+]{8,}$)/)
          .required()
      )
      .required(),
    organisation: Joi.array().required(),
    linkedin: Joi.string(),
    facebook: Joi.string(),
    twitter: Joi.string(),
    github: Joi.string(),
    projects: Joi.array(),
    skills: Joi.array().required(),
    photo: Joi.array(),
    address: Joi.array().required(),
    strength: Joi.string().required(),
    current_engagement: Joi.string(),
    topics_of_interest: Joi.array().required(),
    portfolio: Joi.string(),
  }),

  optionalSchema: Joi.object().keys({
    username: Joi.string(),
    email: Joi.array().items(
      Joi.string()
        .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)
        .required()
    ),
    phone: Joi.array().items(
      Joi.string()
        .regex(/([0-9+]{8,}$)/)
        .required()
    ),
    organisation: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        position: Joi.string().required(),
        date: Joi.date().required(),
      })
    ),
    linkedin: Joi.string(),
    facebook: Joi.string(),
    twitter: Joi.string(),
    github: Joi.string(),
    projects: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        url: Joi.string().required(),
        git_url: Joi.string().required(),  
        type: Joi.string().required(),
        description: Joi.string().required(),
        technologies: Joi.array().items(Joi.string()),
      })
    ),
    skills: Joi.array(),
    photo: Joi.array(),
    address: Joi.array(),
    strength: Joi.string(),
    current_engagement: Joi.string(),
    topics_of_interest: Joi.array(),
    portfolio: Joi.string(),
  }),

  profileIdSchema: Joi.object().keys({
    profileId: Joi.string().regex(/[a-zA-Z0-9]{24}/),
  }),
};
 