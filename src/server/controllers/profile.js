const Profile = require("../models/profileModel");

module.exports = {
  createUserProfile: async (req, res) => {
    const username = await Profile.findOne({ username: req.body.username });
    if (username) {
      return res.status(500).json({ message: "username already exists!" });
    }
    const userProfile = new Profile(req.body);
    try {
      const savedProfile = await userProfile.save();
      res
        .status(201)
        .json({ message: "Profile has been created", savedProfile });
    } catch {
      res
        .status(400)
        .json({ error: "Profile was not created succeessfully try again." });
    }
  },

  deleteUserProfile: async (req, res) => {
    try {
      const deleteUser = await Profile.findByIdAndDelete({
        _id: req.params.userId,
      });
      res
        .status(200)
        .json({ message: "Profile has been deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: "Profile cannot be deleted.Try again" });
    }
  },
};
