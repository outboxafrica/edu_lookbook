const express = require('express');
const router = express.Router();

//import Module Controllers
const { signUp, logIn, updateUserById, viewUsers, viewUserById, deleteUser } = require('../controllers/user');

//import the validators
const { validation, userIdValidation } = require('../helpers/validation');
const { userValidSchema, optionalUserValidSchema } = require('../helpers/schemas/profile');
//import authentication module
const { authenticate } = require('../helpers/auth');

router.route('/').get(authenticate, viewUsers);
router.route('/signup').post(validation(userValidSchema), signUp);
router.route('/login').get(validation(optionalUserValidSchema), logIn);
router.route('/:userId').get([ authenticate, userIdValidation ], viewUserById);
router.route('/:userId').patch([ authenticate, userIdValidation, validation(optionalUserValidSchema) ], updateUserById);
router.route('/:userId').delete([ authenticate, userIdValidation ], deleteUser);

module.exports = router;
