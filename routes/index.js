const express = require('express');
const logger = require('../config/logger');

const router = express.Router();

/* GET status. */
router.get('/', (req, res) => {
  logger.info('{status: \'SUCCESS\'}');
  res.send({
    version: '1.0',
    status: 'SUCCESS',
  });
});

module.exports = router;
