
const express = require('express');
const router = express.Router();

//importing the ProfileController
const { validate } =require('../helpers/validations')
const {
	createUserProfile,
	viewUserProfileById,
	viewUserProfiles,
	updateUserProfile,
	deleteUserProfile
} = require('../controllers/profile');


router.route('/').get( viewUserProfiles);
router.route('/').post(validate, createUserProfile);
router.route('/:profileId').get(viewUserProfileById);
router.route('/:profileId').patch(updateUserProfile);
router.route('/:profileId').delete(deleteUserProfile);

module.exports = router;
