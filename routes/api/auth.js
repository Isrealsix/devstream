const express = require('express');
const router = express.Router();

/**
 * @description GET api/auth
 * @description Test Route
 * @access Public
 */
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;