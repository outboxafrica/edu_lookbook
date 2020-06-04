<<<<<<< HEAD
const router = require("express-promise-router")();
const { createUserProfile,deleteUserProfile } = require("../controllers/profile");

router.route("/").post(createUserProfile);
router.route("/:userId").delete(deleteUserProfile); 
=======
const express = require('express');
const router = express.Router();
//importing the ProfileController
const {
	createUserProfile,
	viewUserProfileById,
	viewUserProfiles,
	updateUserProfile,
	deleteUserProfile
} = require('../controllers/profile');

router.route('/').get(viewUserProfiles);
router.route('/').post(createUserProfile);
router.route('/:profileId').get(viewUserProfileById);
router.route('/:profileId').patch(updateUserProfile);

>>>>>>> 2c91220... ft(add: users crud operations)
module.exports = router;
