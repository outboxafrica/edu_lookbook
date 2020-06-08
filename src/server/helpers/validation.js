<<<<<<< HEAD
//import the Validation Schemas
const { userIdValidSchema } = require('./schemas/profile');

module.exports = {
	validation       : (schema) => {
		return (req, res, next) => {
			const result = schema.validate(req.body);
			if (result.error) {
				res.status(403).json({ Message: 'Something went wrong', Error: result.error.details[0].message });
			} else {
				next();
			}
		};
	},
	userIdValidation : (req, res, next) => {
		const result = userIdValidSchema.validate(req.params);
		if (result.error) {
			//throw an error
			res.status(403).json({ Message: 'Something Went Wrong', Error: result.error.details[0].message });
=======
const Joi = require('joi');
const { profileSchema, profileIdSchema, optionalSchema } = require('./validationSchemas');

module.exports = {
	profileValidator   : (req, res, next) => {
		const result = Joi.validate(req.body, profileSchema);
		if (result.error) {
			res.status(403).json(result.error.details[0].message);
		} else {
			next();
		}
	},
	updateValidator    : (req, res, next) => {
		const result = Joi.validate(req.body, optionalSchema);
		if (result.error) {
			res.status(403).json(result.error.details[0].message);
		} else {
			next();
		}
	},
	profileIdValidator : (req, res, next) => {
		const result = Joi.validate(req.params, profileIdSchema);
		if (result.error) {
			res.status(403).json(result.error.details[0].message);
>>>>>>> d3e3817... ch(add: user profile validation)
		} else {
			next();
		}
	}
};
