const JWT = require("jsonwebtoken");
require("dotenv").config();
const StatusCodes = require("http-status-codes");

module.exports = {
  authenticate: (req, res, next) => {
    const header = req.headers["authorization"];
    if (!header) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Authorization Header Missing!" });
    }
    if (header.startsWith("Bearer")) {
      //extract the token from the header
      const token = header.split(" ")[1];
      JWT.verify(token, process.env.SECRET, (err, authData) => {
        if (err) {
          //throw error if token is invalid
          res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid token!" });
        } else {
          req.userID = authData.id;
          req.username = authData.username;
          next();
        }
      });
    } else {
      //throw error if the header is malformed
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: "Malformed Authorization Header!" });
    }
  },
  signToken: (user) => {
    const token = JWT.sign(
      {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        otherName: user.otherName,
      },
      process.env.SECRET,
      { expiresIn: "24hr" }
    );
    return token;
  },
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        res
          .status(StatusCodes.FORBIDDEN)
          .json({ error: result.error.details[0].message });
      } else {
        next();
      }
    };
  },

  validateParams: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.params);
      if (result.error) {
        res.status(StatusCodes.FORBIDDEN).json({
          error: result.error.details[0].message,
        });
      } else {
        next();
      }
    };
  },
};
