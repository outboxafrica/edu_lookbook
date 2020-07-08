const Joi = require('@hapi/joi');

module.exports = {
	userValidSchema         : Joi.object().keys({
		username    : Joi.string().required(),
		method      : Joi.string().required(),
		oauthid     : Joi.string(),
		firstName   : Joi.string().required(),
		otherName   : Joi.string().required(),
		middleName  : Joi.string(),
		displayName : Joi.string(),
		password    : Joi.string(),
		userLevel   : Joi.string().required(),
		comment     : Joi.string(),
		canEdit     : Joi.boolean(),
		enabled     : Joi.boolean()
	}),
	optionalUserValidSchema : Joi.object().keys({
		username    : Joi.string(),
		method      : Joi.string(),
		oauthid     : Joi.string(),
		firstName   : Joi.string(),
		otherName   : Joi.string(),
		middleName  : Joi.string(),
		displayName : Joi.string(),
		userLevel   : Joi.string(),
		comment     : Joi.string(),
		canEdit     : Joi.boolean(),
        enabled     : Joi.boolean(),
        password : Joi.string()
	}),
	userIdValidSchema       : Joi.object({
		userId : Joi.string().regex(/[a-zA-Z0-9]{24}/).required()
	})
};
