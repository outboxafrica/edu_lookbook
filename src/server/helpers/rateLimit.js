const rateLimit = require("express-rate-limit")

const rateLimiter = rateLimit({
    windowMs: 24 * 60 * 60 * 1000, //24 hrs in Milliseconds
    max: 5, //number of API calls that can be made within 24 hrs
    message: {
        error: "too many requests",
        message: "Too many requests from this IP, please try again later"
    },
    headers: true
})

module.exports = rateLimiter