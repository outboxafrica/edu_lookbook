const express = require('express');
const router = express.Router();

//import Module Controllers
const { createUser, updateUserById, viewUsers, viewUserById, deleteUser } = require('../controllers/user');
//import the validators
const { userValidation, userIdValidation, updateValidation } = require('../helpers/validation');

router.route('/').get(viewUsers);
router.route('/:userId').get(userIdValidation, viewUserById);
router.route('/').post(userValidation, createUser);
router.route('/:userId').patch(userIdValidation, updateValidation, updateUserById);
router.route('/:userId').delete(userIdValidation, deleteUser);

module.exports = router;
