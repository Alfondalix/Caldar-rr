const express = require('express');
<<<<<<< HEAD
const boilerTypesRouter = require('./boiler-types');
=======
>>>>>>> dfe29b1... CAL-013: fix pr comments
const techniciansRouter = require('./technicians');
const boilersRouter = require('./boilers');

const router = express.Router();

<<<<<<< HEAD
router.use('/boiler-types', boilerTypesRouter);
router.use('/boilers', boilersRouter);
=======
>>>>>>> dfe29b1... CAL-013: fix pr comments
router.use('/technicians', techniciansRouter);

module.exports = router;
