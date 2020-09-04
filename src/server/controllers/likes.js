const Profile = require("../models/profileModel");
const Like = require("../models/likesModel");
const StatusCodes = require("http-status-codes");

module.exports = {
  checkProfile: async (req, res) => {
    try {
      const profile = await Profile.findById(req.body.profile_id);
       if (!profile) {
         return res
           .status(StatusCodes.CONFLICT)
           .json({ Error: "this userprofile does not exist" });
      }
      console.log(req.userID)
    
      if (req.userID === profile.user_id) {
        return "you can not like yourself";
      }
      else {
        const NewLike = new Like(req.body);
        const savedLike = await NewLike.save();
        const updateProfile = await Profile.updateOne(
          { _id: profile.userID },
          { $push: { likes: savedLike } }
        );
        
        res.status(StatusCodes.OK).json({
          Message: "You have liked this user profile",
          Like: savedLike,
        });
        console.log(savedLike);
        console.log(updateProfile);
      }
    } catch (err) {
      console.log("error while liking this user profile", err);
      res
        .status(StatusCodes.FORBIDDEN)
        .json({ error: "failed to like this user profile" });
    }
  },

};
