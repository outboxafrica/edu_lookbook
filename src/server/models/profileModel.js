const mongoose = require('mongoose')
const Profile = require('./schemas/profile');

//Creating a profile Model Based on the Profile Schema
module.exports = mongoose.model('Profile',Profile)
