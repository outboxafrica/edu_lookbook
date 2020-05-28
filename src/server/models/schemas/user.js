const { Schema } = require("mongoose");

const User = new Schema({
  username: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  oauthid: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  otherName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  displayName: {
    type: String,
    required: false,
  },
  userLevel: {
    type: String,
    required: true,
    default: 1,
  },
  password: {
    type: String,
    required: false,
  },
  canEdit: {
    type: Boolean,
    required: false,
    default: true,
  },
  enabled: {
    type: Boolean,
    required: false,
    default: true,
  },
  comment: {
    type: String,
    required: false,
  },
});

module.exports = User;
