const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const RateLimit = require("./helpers/rateLimit");
const middlewares = require("./helpers/middlewares");
const usersRouter = require("./routers/userRouter");
const profileRouter = require("./routers/profileRouter");

const app = express();
app.use(helmet());
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

app.use(RateLimit);
app.use("/api/users", usersRouter);
app.use("/api/profiles", profileRouter);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
