const Profile = require('../models/profileModel');

module.exports = {
	createUserProfile   : async (req, res) => {
		// To Create A User Profile
		try {
			//check if the User Profile Already Exists
			const user = await Profile.findOne({ username: req.body.username });
			if (user) {
				//return error
				res.status(403).json({ Error: 'User Profile Already Exists' });
			} else {
				const NewProfile = new Profile(req.body);
				const saved = await NewProfile.save();
				res.status(200).json({ Message: 'Successfully Added A Profile', Profile: saved });
			}
		} catch (err) {
			//throw an error
			res.status(403).json({ Message: 'Something Went Wrong >> Unable to create Profile', Error: err });
		}
	},
	viewUserProfileById : async (req, res) => {
		// To View User Profiles
		try {
			//Get all Profiles
			const profile = await Profile.findOne({ _id: req.params.profileId });
			res.status(200).json(profile);
		} catch (err) {
			//throw an error if anything goes wrong
			res.status(404).json({
				Message : `Something Went Wrong. User Profile of Given id >> ${req.params.profileId} << was Not Found `,
				Error   : err
			});
		}
	},
	viewUserProfiles    : async (req, res) => {
		// To View User Profiles
		try {
			//Get all Profiles
			const profiles = await Profile.find();
			if (profiles.length <= 0) {
				res.status(404).json({ Message: 'No Profiles Available' });
			} else {
				res.status(200).json({ Profiles: profiles });
			}
		} catch (err) {
			//throw an error if anything goes wrong
			res.status(404).json({ Message: `Something Went Wrong. Profiles Not Found`, Error: err });
		}
	},
	updateUserProfile   : async (req, res) => {
		// To Update a User Profile
		try {
			const profile = await Profile.findOneAndUpdate({ _id: req.params.profileId }, { $set: req.body });
			res.status(200).json({ Message: `${profile.username}'s Profile has been Updated` });
		} catch (err) {
			//Throw an error Message
			res
				.status(404)
				.json({ Message: `Profile of given ID >> ${req.params.profileId} << was not Found`, Error: err });
		}
	},
	deleteUserProfile   : (res, req) => {
		//Delete A User Profile
	}
};
