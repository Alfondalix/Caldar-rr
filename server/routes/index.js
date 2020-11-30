const express = require('express');
const boilerTypes = require('./boiler-types');
const boilersRouter = require('./boilers')

const router = express.Router();

router.use('/boiler-types', boilerTypes);
router.use('/boilers', boilersRouter);

module.exports = router;
