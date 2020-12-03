const express = require('express');
const boilerTypesRouter = require('./boiler-types');
const techniciansRouter = require('./technicians');
const boilersRouter = require('./boilers');
const companiesRouter = require('./companies');

const router = express.Router();

router.use('/boiler-types', boilerTypesRouter);
router.use('/boilers', boilersRouter);
router.use('/technicians', techniciansRouter);
router.use('/companies', companiesRouter);

module.exports = router;
