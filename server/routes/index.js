const express = require('express');
const boilerTypes = require('./boiler-types');

const router = express.Router();

router.use('/boiler-types', boilerTypes);
router.use('/boilers', () => console.log('routes created'));

module.exports = router;
