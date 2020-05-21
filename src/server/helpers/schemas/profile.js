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
    organisation: Joi.array()
      .items(
        Joi.object({
          name: Joi.string().required(),
          position: Joi.string().required(),
          date: Joi.string().required(),
        })
      )
      .required(),
    linkedin: Joi.string(),
    facebook: Joi.string(),
    twitter: Joi.string(),
    github: Joi.string(),
    projects: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        url: Joi.string().required(),
        role: Joi.string().required(),
        git_url: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        technologies: Joi.array().items(Joi.string()),
      })
    ),
    skills: Joi.array()
      .items(
        Joi.object({
          name: Joi.string().required(),
          proficiency: Joi.string().required(),
          favorite: Joi.boolean().required(),
        })
      )
      .required(),
    photo: Joi.array(),
    address: Joi.array()
      .items(
        Joi.object({
          country: Joi.string().required(),
          state: Joi.string().required(),
          address_line: Joi.string().required(),
        })
      )
      .required(),
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
        date: Joi.string().required(),
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
        technologies: Joi.array().items(Joi.string()).required(),
      })
    ),
    skills: Joi.array().items(
      Joi.object({
        name: Joi.string().required(),
        proficiency: Joi.string().required(),
        favorite: Joi.boolean().required(),
      })
    ),
    photo: Joi.array().items(Joi.string()),
    address: Joi.array().items(
      Joi.object({
        country: Joi.string().required(),
        state: Joi.string().required(),
        address_line: Joi.string().required(),
      })
    ),
    strength: Joi.string(),
    current_engagement: Joi.string(),
    topics_of_interest: Joi.array().items(Joi.string()).required(),
    portfolio: Joi.string(),
  }),

  profileIdSchema: Joi.object().keys({
    profileId: Joi.string().regex(/[a-zA-Z0-9]{24}/),
  }),
};
