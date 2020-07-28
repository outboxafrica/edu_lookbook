const User = require('../models/user');
const Profile = require('../models/profile');
const bcrypt = require('bcrypt');
const { signToken } = require('../helpers/validation');
const StatusCodes = require('http-status-codes');

module.exports = {
	SignUp       : async (req, res) => {
		try {
			const user = await User.findOne({ username: req.body.username });
			if (user) {
				//throw an error
				return res.status(StatusCodes.CONFLICT).json({ error: 'User already exists!' });
			} else {
				const NewUser = new User(req.body);
				const savedUser = await NewUser.save();
				const token = signToken(savedUser);
				return res.status(200).json({ Message: 'User account succesfully created!', token });
			}
		} catch (err) {
			console.log('Error creating user account: ', err);
			return res.status(StatusCodes.EXPECTATION_FAILED).json({
				error : 'Server error occured, user account creation failed!'
			});
		}
	},
	LogIn        : async (req, res) => {
		try {
			//check whether the user exits
			const user = await User.findOne({ username: req.body.username });
			//compare passwords using Bcrypt
			const result = await bcrypt.compare(req.body.password, user.password);
			if (result) {
				const token = signToken(user);
				return res.status(200).json({ token });
			} else {
				return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid username or password!' });
			}
		} catch (err) {
			console.log('Error while loging in: ', err);
			return res.status(StatusCodes.EXPECTATION_FAILED).json({
				error : 'Server error occured during login, please try again later!'
			});
		}
	},
	Update       : async (req, res) => {
		// updating the User by id
		try {
			//check for the User
			const user = await User.findOneAndUpdate({ _id: req.userID }, req.body);
			return res.status(StatusCodes.OK).json({ message: 'User successfully updated!', user });
		} catch (err) {
			//throw Error
			res.status(404).json({
				Error : 'Something Went Wrong >>> User of Given ID was Not Found'
			});
		}
	},
	View         : async (req, res) => {
		// viewing Users
		try {
			const user = await User.findOne({ _id: req.userID }, 'username firstName otherName');
			return res.status(200).json(user);
		} catch (err) {
			//throw error
			console.log('Error while fetching user account!', err);
			return res.status(403).json({ error: 'Something Went Wrong!' });
		}
	},
	viewByCohort : async (req, res) => {
		try {
			//check whether the cohort exists
			const cohort = await Profile.find({ cohort: req.body.cohort }, 'user_id username photo');
			if (cohort.length > 0) {
				//return the members of the cohort
				return res.status(StatusCodes.OK).json({ results: cohort });
			} else {
				//throw error
				return res.status(StatusCodes.NOT_FOUND).json({ error: 'Failed to get Cohort Members!' });
			}
		} catch (error) {
			return res.status(StatusCodes.EXPECTATION_FAILED).json({ error: 'Something went wrong, Failed to Fetch' });
		}
	}
};
