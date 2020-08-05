const Profile = require('../models/profileModel');
const Like = require('../models/likesModel');
const StatusCodes = require('http-status-codes');

module.exports = {
  checkProfile: async (req, res) => {
    try {
      req.body.username = req.username
      const user = await Profile.findOne({ username: req.username });
      if (user) {
        const NewLike = new Like(req.body);
        const savedLike = await NewLike.save();
        res.status(StatusCodes.OK).json({
          Message: "You have liked this user",
          Like: savedLike,
        });
      } else {
         res
           .status(StatusCodes.CONFLICT)
           .json({ Error: "this userprofile does not exist" });
      }
    
    } catch (err) {
      console.log("error while liking this user", err)
      res.status(StatusCodes.FORBIDDEN)
      .json({error: "failed to like this user"})
    }
  },
  authenticate: async (req, res) => {
    try {
      const user = await Profile.findById(req.params.user_id);
      //check if the ids are the same
      if (req.user.id === req.params.user_id) {
        return res.status(StatusCodes.FORBIDDEN).json({error: "you can not like yourself"})
      
        //check if the requested user is already in the likes list
        if (
          user.Likes.filter(
            (profileLike) => profileLike.user.toString() === req.user.id
          ).length > 0
        ) {
          return res.status(400).json({ message: "you already liked this profile" });
        } else {
          user.Likes.unshift({ user: req.user.id });
          user.save();
        
        }
      }
    } catch (err) {
      res.status(StatusCodes.CONFLICT).json({error: "you can not like this profile"})
    }
  },
};
