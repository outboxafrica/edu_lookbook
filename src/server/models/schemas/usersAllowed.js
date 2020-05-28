const { Schema } = require("mongoose");

const UsersAllowed = new Schema({
  username: {
    type: String,
    required: true,
  },
  allowed_by: {
    type: String,
    required: true,
  },
});

module.exports = UsersAllowed;
