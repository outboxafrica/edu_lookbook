require("dotenv").config();
const { DEVELOPMENT, PRODUCTION, LOCAL } = require("./envTypes");

const DB_URL = () => {
  switch (process.env.NODE_ENV) {
    case DEVELOPMENT:
      return process.env.DB_URL_DEV;
    case PRODUCTION:
      return process.env.DB_URL_PROD;
    case LOCAL:
      return process.env.DB_URL_LOC;
    default:
      return process.env.DB_URL;
  }
};

module.exports = DB_URL;
