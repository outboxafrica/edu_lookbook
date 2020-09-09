const router = require("express-promise-router")();

//import Module Controllers
const { SignUp, LogIn, Update, View, follow, unfollow} = require("../controllers/user");

//import the validators
const { validateBody, authenticate } = require("../helpers/validation");
const {
  SignUpSchema,
  LoginSchema,
  UpdateSchema,
} = require("../helpers/schemas/users");

router.route("").get(authenticate, View);
router.route("/signup").post(validateBody(SignUpSchema), SignUp);
router.route("/login").post(validateBody(LoginSchema), LogIn);
router.route("/follow").patch(authenticate, follow)
router.route("/unfollow").patch(authenticate, unfollow)
router.route("").patch([authenticate, validateBody(UpdateSchema)], Update);

module.exports = router;
