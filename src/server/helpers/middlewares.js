//resource not found handler
const notFound = (req, res, next) => {
    const error = new Error(`Resource at - ${req.originalUrl} not found`)
    res.status(404)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
    message: error.message,
  });
}

module.exports = {
    notFound,
    errorHandler,
  };