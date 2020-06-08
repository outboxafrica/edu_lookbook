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
//Importing Validation modules
const {profileValidator,updateValidator,profileIdValidator} = require('../helpers/validation')

router.route('/').get(viewUserProfiles);
router.route('/').post(profileValidator,createUserProfile);
router.route('/:profileId').get(profileIdValidator,viewUserProfileById);
router.route('/:profileId').patch(profileIdValidator,updateValidator,updateUserProfile);
router.route('/:profileId').delete(profileIdValidator,deleteUserProfile);

module.exports = router;
