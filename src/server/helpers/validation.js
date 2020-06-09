
//import the Validation Schemas
const { userIdValidSchema } = require('./schemas/profile');
const { profileSchema, profileIdSchema, optionalSchema } = require('./validationSchemas');


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
			res.status(403).json({ Message: 'Something Went Wrong', Error: result.error.details[0].message })

		} },

	profileValidator   : (req, res, next) => {
		const result = profileSchema.validate(req.body);
		if (result.error) {
			res.status(403).json({Error:result.error.details[0].message});
		} else {
			next();
		}
	},
	updateValidator    : (req, res, next) => {
		const result =  optionalSchema.validate(req.body);
		if (result.error) {
			res.status(403).json({Error:result.error.details[0].message});
		} else {
			next();
		}
	},
	profileIdValidator : (req, res, next) => {
		const result = profileIdSchema.validate(req.params);
		if (result.error) {
			res.status(403).json(result.error.details[0].message);

			res.status(403).json({Message:'Invalid profile ID provided',Error:result.error.details[0].message});

		} else {
			next();
		}
	}
}
