const router = require('express-promise-router')();

//import the likes controller
const { checkProfile, authenticate, update } = require('../controllers/likes')

router.route('/create').post(checkProfile, authenticate, update);


//router.route("/:profile_id").get();

module.exports = router;