const express = require('express');

const router = express.Router();

router.use('/rate', require('./rate'));
router.use('/checkout', require('./checkout'));

module.exports = router;
