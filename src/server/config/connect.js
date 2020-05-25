require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CON_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.info("DB Connection Status: ", "Connection Established!");
  })
  .catch((err) => {
    console.error("DB Connnection Status: ", "Connection Failed!");
  });

const db = mongoose.connection;
module.exports = db;
