const express = require('express');
const router = express.Router();

//import Module Controllers
const { createUser, updateUserById, viewUsers, viewUserById, deleteUser } = require('../controllers/user');

router.route('/').get(viewUsers);
router.route('/:userId').get(viewUserById);
router.route('/').post(createUser);
router.route('/:userId').patch(updateUserById);
router.route('/:userId').delete(deleteUser);

module.exports = router;
