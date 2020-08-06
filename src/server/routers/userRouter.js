const router = require("express-promise-router")();

//import Module Controllers
const { SignUp, LogIn, Update, View, viewByCohort } = require("../controllers/user");

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
router.route("").patch([authenticate, validateBody(UpdateSchema)], Update);
router.route("/cohort").get(authenticate,viewByCohort)

module.exports = router;
