const express = require("express");
const router = express.Router();

//importing the validation scehmas
const {
  profileSchema,
  optionalSchema,
  profileIdSchema,
} = require("../helpers/validationSchemas/validationSchemas");

//import the validation functions
const { validateParams, validateBody } = require("../helpers/validation");

const {
  createUserProfile,
  viewUserProfileById,
  viewUserProfiles,
  updateUserProfile,
  deleteUserProfile,
} = require("../controllers/profile");

router.route("/").get(viewUserProfiles);
router.route("/").post(validateBody(profileSchema), createUserProfile);
router
  .route("/:profileId")
  .get(validateParams(profileIdSchema), viewUserProfileById);
router
  .route("/:profileId")
  .patch(
    validateParams(profileIdSchema),
    validateBody(optionalSchema),
    updateUserProfile
  );
router
  .route("/:profileId")
  .delete(validateParams(profileIdSchema), deleteUserProfile);
module.exports = router;
