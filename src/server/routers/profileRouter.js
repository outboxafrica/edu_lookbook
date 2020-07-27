const router = require("express-promise-router")();

//importing the ProfileController
const { NewProfile, UpdateProfile } = require("../helpers/schemas/profiles");
const {
  createProfile,
  viewProfileById,
  viewProfileByUserId,
  viewProfiles,
  updateProfile,
} = require("../controllers/profile");
//Importing Validation modules
const {
  authenticate,
  validateBody,
  validateParams,
} = require("../helpers/validation");

router.route("/").get(authenticate, viewProfiles);
router.route("/").post([authenticate, validateBody(NewProfile)], createProfile);
router.route("/:profileId").get(authenticate, viewProfileById);
router.route("/user/:userId").get(authenticate, viewProfileByUserId);
router
  .route("")
  .patch([authenticate, validateBody(UpdateProfile)], updateProfile);

module.exports = router;
