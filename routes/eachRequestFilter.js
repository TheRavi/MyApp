const logger = require('../config/logger');

const eachRequestFilter = (req, res, next) => {
  const logObject = {
    url: req.url,
    timestamp: new Date().toISOString(),
  };
  logger.info(logObject);
  next();
};

module.exports = eachRequestFilter;
