const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const { signToken } = require('../helpers/auth');
const validator = require("email-validator");

module.exports = {
  signUp: async (req, res) => {
    //creating a User
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!validator.validate(req.body.username)) {
        res.status(400).json({ Error: "Enter a valid email address" });
      }

			if (user) {
				//throw an error
				res.status(400).json({ Error: 'The User Already Exists' });
			} else {
				const NewUser = new User(req.body);
				const savedUser = await NewUser.save();
				const token = signToken(savedUser);
				res.status(200).json({ Message: 'Successfully Added A New User', Token: token });
			}
		} catch (err) {
			//throw Error
			res.status(404).json({ Error: 'Something went Wrong', err });
		}
	},
	logIn          : async (req, res) => {
		let login_password = req.body.password;
		let login_username = req.body.username;
		try {
			//check whether the user exits
			const user = await User.findOne({ username: login_username });
			//compare passwords using Bcrypt
			const result = await bcrypt.compare(login_password, user.password);
			if (result == true) {
				const token = signToken(user);
				res.status(200).json({ Message: 'Logged in successfully', Token: token });
			} else {
				res.status(404).json({ Error: 'Invalid Password Entered' });
			}
		} catch (err) {
			res.status(404).json({ Error: 'User doesnot Exist >> Please SignUp first', err });
		}
	},
	updateUserById : async (req, res) => {
		// updating the User by id
		try {
			//Check whether the Username is already existent in the DB
			const username = await User.findOne({ username: req.body.username });
			if (username) {
				//throw an error
				res.status(403).json({ Error: 'Username Provided is Already Taken >> Enter Unique username' });
			} else {
				//check for the User
				const user = await User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body });
				if (user) {
					res.status(200).json({ Message: `${user.firstName} has been successfully Updated` });
				} else {
					res.status(404).json({ Error: 'Something Went Wrong >>> User of Given ID was Not Found' });
				}
			}
		} catch (err) {
			//throw Error
			res.status(404).json({ Error: 'Something Went Wrong >>> User of Given ID was Not Found' });
		}
	},
	viewUsers      : async (req, res) => {
		// viewing Users
		try {
			const users = await User.find();
			if (users >= 0) {
				//No Users
				res.status(404).json({ Error: 'No Users Found' });
			} else {
				//display Users
				res.status(200).json({ Users: users });
			}
		} catch (err) {
			//throw error
			res.status(403).json({ Error: 'Something Went Wrong', err });
		}
	},
	viewUserById   : async (req, res) => {
		//view User by id
		try {
			const user = await User.findOne({ _id: req.params.userId });
			if (user) {
				//No Users
				res.status(200).json({ User: user });
			} else {
				//display Users
				res.status(404).json({ Error: 'No User of given ID was Found' });
			}
		} catch (err) {
			//throw error
			res.status(403).json({ Error: 'Something Went Wrong', err });
		}
	},
	deleteUser     : async (req, res) => {
	
		try {
			const currentUser = await User.findOne({_id:req.params.userId});
			if(currentUser.userLevel != 2){
				return res.status(400).json({Error:"Request for Permission to delete"});
			}
			const user = await User.findOneAndDelete({ _id: req.params.userId });
			res.status(200).json({ Message: `${user.firstName} has been Deleted Successfully` });
		} catch (err) {
			//throw Error
			res.status(400).json({ Error: `Something went Wrong >> User OF given ID was not found`, err });
		}
	}
};
