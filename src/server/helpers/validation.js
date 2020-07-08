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
		} else {
			next();
		}
	}
};
