/**
 * Middleware that logs the request
 */
function requestLogger(req, res, next) {
  console.log('INFO: ' + Date.now());
  next();
}

module.exports = {
  requestLogger,
};
