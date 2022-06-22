const express = require('express');
const router = express.Router();

/**
 * @description GET api/users
 * @description Test Route
 * @access Public
 */
router.get('/', (req, res) => res.send('User route'));

module.exports = router;