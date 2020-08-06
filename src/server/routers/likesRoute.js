const router = require('express-promise-router')();

//import the likes controller
const { checkProfile, authenticate } = require('../controllers/likes')

router.route('/create').post(checkProfile)

router.route("/:profile_id").get(authenticate);

module.exports = router;