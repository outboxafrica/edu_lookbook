//import the Validation Schemas
const { userValidSchema, optionalUserValidSchema, userIdValidSchema } = require('./schemas/profile');

module.exports = {
	userValidation   : (req, res, next) => {
		const result = userValidSchema.validate(req.body);
		if (result.error) {
			res.status(403).json({ Message: 'Something Went Wrong', Error: result.error.details[0].message });
		} else {
			next();
		}
	},
	userIdValidation : (req, res, next) => {
		const result = userIdValidSchema.validate(req.params);
		if (result.error) {
			//throw an error
			res.status(403).json({ Message: 'Something Went Wrong', Error: result.error.details[0].message });
		} else {
			next();
		}
	},
	updateValidation : (req, res, next) => {
		const result = optionalUserValidSchema.validate(req.body);
		if (result.error) {
			res.status(403).json({ Message: 'Something Went Wrong', Error: result.error.details[0].message });
		} else {
			next();
		}
	}
};
