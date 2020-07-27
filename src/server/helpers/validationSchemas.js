const Joi = require('joi');

module.exports = {
	profileSchema   : {
		username           : Joi.string().required(),
		email              : Joi.array().items(
			Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/).required()
		).required(),
		phone              : Joi.array().items(Joi.string().regex(/([0-9+]{8,}$)/).required()).required(),
		organisation       : Joi.array().required(),
		linkedin           : Joi.string(),
		facebook           : Joi.string(),
		twitter            : Joi.string(),
		github             : Joi.string(),
		projects           : Joi.array(),
		skills             : Joi.array().required(),
		photo              : Joi.array(),
		address            : Joi.array().required(),
		strength           : Joi.string().required(),
		current_engagement : Joi.string(),
		topics_of_interest : Joi.array().required(),
		portfolio          : Joi.string()
	},
	optionalSchema  : {
		username           : Joi.string(),
		email              : Joi.array().items(
			Joi.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/).required()
		),
		phone              : Joi.array().items(Joi.string().regex(/([0-9+]{8,}$)/).required()),
		organisation       : Joi.array(),
		linkedin           : Joi.string(),
		facebook           : Joi.string(),
		twitter            : Joi.string(),
		github             : Joi.string(),
		projects           : Joi.array(),
		skills             : Joi.array(),
		photo              : Joi.array(),
		address            : Joi.array(),
		strength           : Joi.string(),
		current_engagement : Joi.string(),
		topics_of_interest : Joi.array(),
		portfolio          : Joi.string()
	},
	profileIdSchema : {
		profileId : Joi.string().regex(/[a-zA-Z0-9]{24}/)
	}
};
