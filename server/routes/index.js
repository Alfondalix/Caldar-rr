const express = require('express');

const boilerTypesRouter = require('./boilertypes')

const router = express.Router();

router.use('/boilertypes', boilerTypesRouter);
//router.use('/', () => console.log('routes created'));

module.exports = router;
