const Profile = require("../models/profileModel");
const Like = require("../models/likesModel");
const StatusCodes = require("http-status-codes");

module.exports = {
  checkProfile: async (req, res) => {
    try {
      const profile = await Profile.findById(req.body.profile_id);
      if (profile) {
        const NewLike = new Like(req.body);
        const savedLike = await NewLike.save();
        console.log(savedLike);
        res.status(StatusCodes.OK).json({
          Message: "You have liked this user profile",
          Like: savedLike,
        });
      } else {
        res
          .status(StatusCodes.CONFLICT)
          .json({ Error: "this userprofile does not exist" });
      }
    } catch (err) {
      console.log("error while liking this user profile", err);
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: "failed to like this user profile" });
    }
  },
  authenticate: async (req, res) => {
    try {
      const profile = await Profile.findById(req.params.id);
      //check if the ids are the same
      if (req.body.profile_id === req.params.id) {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ error: "you can not like yourself" });
      }

      //check if a like  is already in the likes array
      const existingLike = profile.find({ likes: { id: req.params._id } });
      if (existingLike) {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ error: "you have already liked this profile" });
      } else {
        return res
          .status(StatusCodes.ACCEPTED)
          .json({ message: "you have not yet liked this profile" });
      }
    } catch (err) {
      res
        .status(StatusCodes.CONFLICT)
        .json({ error: "you can not like this profile" });
    }
    next();
  },

  update: async (req, res) => {
    try {
      const updateProfile = await Profile.updateOne(
        { _id: req.params.id },
        { $push: { likes: savedLike } }
      );
      console.log(updateProfile);
    } catch (err) {
      res
        .status(StatusCodes.EXPECTATION_FAILED)
        .json({ error: "failed to update this profile" });
    }
  },
};
