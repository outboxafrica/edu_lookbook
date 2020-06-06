const express = require('express');
const router = express.Router();

//importing the ProfileController
const { validate, checkParamsInPut } =require('../helpers/validations')
const {
	createUserProfile,
	viewUserProfileById,
	viewUserProfiles,
	updateUserProfile,
	deleteUserProfile
} = require('../controllers/profile');

router.route('/').get( viewUserProfiles);
router.route('/').post(validate, createUserProfile);
router.route('/:profileId').get( checkParamsInPut, viewUserProfileById);
router.route('/:profileId').patch(checkParamsInPut, updateUserProfile);
router.route('/:profileId').delete(checkParamsInPut, deleteUserProfile);

module.exports = router;
