const Joi = require('@hapi/joi');


module.exports= { 
    validate:(req, res, next)=> {
    const schema = Joi.object().keys({
      username: Joi.string().min(3).regex(/^[a-zA-Z0-9\-]+$/).required(),
      email: Joi.array().required(),
      phone: Joi.array().required(),
      organisation: Joi.array().required(),
      linkedIn: Joi.string(),
      facebook: Joi.string(),
      twitter: Joi.string(),
      github: Joi.string(),
      projects: Joi.array(),
      skills: Joi.array().required(),
      photo: Joi.array(),
      address: Joi.array().required(),
      strength: Joi.string().required(),
      current_engagement: Joi.string().required(),
      topics_of_interest: Joi.array().required(),
      portfolio: Joi.string()
      
      
    });
    const result = schema.validate(req.body);
    // input validation
    if (result.error) {
      const errMsg = result.error.details[0].message;
      return res.status(400).send({ error: 400, message: `${errMsg}` });
    }
    next();
  },
  checkParamsInPut(req, res, next) {
    const checkInput = req.params.id.regex(/^[0-9a-fA-F]{24}$/);
    if (!checkInput) return res.status(400).send({ status_code: 400, error: 'parameter should be a valid _id Number' })
    next();
  },
}