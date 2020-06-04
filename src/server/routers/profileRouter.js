const router = require("express-promise-router")();
const { createUserProfile,deleteUserProfile } = require("../controllers/profile");

router.route("/").post(createUserProfile);
router.route("/:userId").delete(deleteUserProfile); 
module.exports = router;
