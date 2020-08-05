const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./routers/userRouter");
const profileRouter = require("./routers/profileRouter");
const likesRouter = require("./routers/likesRoute")

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

app.use("/api/users", usersRouter);
app.use("/api/profiles", profileRouter);
app.use("/api/likes", likesRouter);

module.exports = app;
