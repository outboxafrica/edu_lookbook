const express = require("express");
const bodyParser = require("body-parser");
const accountsRouter = require("./routers/accounts");

const app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  next();
});

//app.use("/api/profiles", accountsRouter);
//app.use("/api/users", usersRouter);

module.exports = app;
