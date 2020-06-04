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

module.exports = router;
