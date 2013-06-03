const JWT = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	authenticate : (req, res, next) => {
		const header = req.headers['authorization'];
		if (!header) {
			res.status(400).json({ Error: 'Authorization header is Missing' });
		}
		if (header.startsWith('Bearer')) {
            //extract the token from the header
            const token = header.split(' ')[1];
            JWT.verify(token,process.env.SECRET,(err,authData)=>{
                if(err){
                    //throw error if token is invalid
                    res.status(400).json({Error:"Token is Invalid >> Enter valid token"})
                }else{
                    next()
                }
            })
		}else{
            //throw error if the header is malformed
            res.status(403).json({Error:"Authorization header is Malformed"})
        }
	},
	signToken    : (user) => {
		const token = JWT.sign(
			{ id: user._id, username: user.username, firstName: user.firstName, otherName: user.otherName },
			process.env.SECRET,
			{ expiresIn: '24hr' }
		);
		return token;
	}
};
