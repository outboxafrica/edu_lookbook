require("dotenv").config();
const mongoose = require("mongoose");
const { DEVELOPMENT, PRODUCTION, LOCAL } = require("./envTypes");

let DB_URL;
switch (process.env.NODE_ENV) {
  case DEVELOPMENT:
    DB_URL = process.env.DB_URL_DEV;
    break;
  case PRODUCTION:
    DB_URL = process.env.DB_URL_PROD;
    break;
  case LOCAL:
    DB_URL = process.env.DB_URL_LOC;
    break;
  default:
    DB_URL = process.env.DB_URL;
}
console.log("Establishing Database Connection . . . ");
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.info("DB Connection Status: ", "Connection Established!");
  })
  .catch((err) => {
    console.log("DB Connnection Status: ", "Connection Failed!");
    console.error("Error Details: ", err);
  });

const db = mongoose.connection;
module.exports = db;
