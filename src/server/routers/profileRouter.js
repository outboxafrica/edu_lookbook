const express = require('express');
const router = express.Router();

//importing the ProfileController
const { validate } =require('../helpers/validations')
const {
  optionalSchema, profileIdSchema,profileSchema
} = require("../helpers/schemas/profile");
const {
	createUserProfile,
	viewUserProfileById,
	viewUserProfiles,
	updateUserProfile,
	deleteUserProfile
} = require('../controllers/profile');
//Importing Validation modules
const {validateBody,validateParams} = require('../helpers/profileValidation')

router.route('/').get(viewUserProfiles);
router.route('/').post(validateBody(profileSchema),createUserProfile);
router.route('/:profileId').get(validateParams(profileIdSchema),viewUserProfileById);
router.route('/:profileId').patch([validateParams(profileIdSchema),validateBody(optionalSchema)],updateUserProfile);
router.route('/:profileId').delete(validateParams(profileIdSchema),deleteUserProfile);

module.exports = router;
