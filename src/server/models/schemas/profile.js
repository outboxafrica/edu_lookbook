const { Schema } = required("mongoose");

const Profile = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: Array,
    required: true,
  },
  phone: {
    type: Array,
    required: true,
  },
  organisation: {
    type: Array,
    required: true,
  },
  linkenin: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  github: {
    type: String,
    required: false,
  },
  projects: {
    type: Array,
    required: false,
  },
  skills: {
    type: Array,
    required: true,
  },
  photo: {
    type: Array,
    required: false,
  },
  address: {
    type: Array,
    required: true,
  },
  strength: {
    type: String,
    required: true,
  },
  current_engagement: {
    type: String,
    required: false,
  },
  topics_of_interest: {
    type: Array,
    required: true,
  },
  portfolio: {
    type: String,
    required: false,
  },
});

module.exports = Profile;
