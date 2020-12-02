const express = require('express');
const boilerTypesRouter = require('./boiler-types');
const boilersRouter = require('./boilers');

const router = express.Router();

router.use('/boiler-types', boilerTypesRouter);
router.use('/boilers', boilersRouter);

module.exports = router;
