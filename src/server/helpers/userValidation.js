module.exports = { 
	validation: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        res.status(403).json({ Error: result.error.details[0].message });
      } else {
        next();
      }
    };
  },

  userIdValidation: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.params);
      if (result.error) {
        res.status(403).json({
          Message: "Invalid profile ID provided",
          Error: result.error.details[0].message,
        });
      } else { 
        next();
      }
    };
  },
};
