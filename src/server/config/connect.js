require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  // .connect(process.env.DB_URL="mongodb://localhost:27017/lookbook", {
    .connect("mongodb://localhost:27017/look-book", {
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
