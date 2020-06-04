const profile = require('./schemas/profile')
const mongoose = require('mongoose')

const Profile = mongoose.model('profile',profile)


module.exports = Profile;