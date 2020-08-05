const router = require('express-promise-router')();

//import the likes controller
const { checkProfile, authenticate } = require('../controllers/likes')

router.route('/:user_id').post(checkProfile, authenticate)

module.exports = router;