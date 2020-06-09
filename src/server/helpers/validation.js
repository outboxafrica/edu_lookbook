const Joi = require('joi');
const { profileSchema, profileIdSchema, optionalSchema } = require('./validationSchemas');

module.exports = {
	profileValidator   : (req, res, next) => {
		const result = Joi.validate(req.body, profileSchema);
		if (result.error) {
			res.status(403).json({Error:result.error.details[0].message});
		} else {
			next();
		}
	},
	updateValidator    : (req, res, next) => {
		const result = Joi.validate(req.body, optionalSchema);
		if (result.error) {
			res.status(403).json({Error:result.error.details[0].message});
		} else {
			next();
		}
	},
	profileIdValidator : (req, res, next) => {
		const result = Joi.validate(req.params, profileIdSchema);
		if (result.error) {
			res.status(403).json({Message:'Invalid profile ID provided',Error:result.error.details[0].message});
		} else {
			next();
		}
	}
};
