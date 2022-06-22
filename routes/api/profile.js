const express = require('express');
const router = express.Router();

/**
 * @description GET api/profile
 * @description Test Route
 * @access Public
 */
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;