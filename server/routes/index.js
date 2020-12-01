const express = require('express');
const boilerTypes = require('./boiler-types');

const router = express.Router();

router.use('/boiler-types', boilerTypes);

module.exports = router;
