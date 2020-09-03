const router = require('express-promise-router')();

//import the likes controller
const { checkProfile} = require('../controllers/likes')

router.route('/create').post(checkProfile);

module.exports = router;