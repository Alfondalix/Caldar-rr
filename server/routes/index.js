const express = require('express');

const router = express.Router();

router.use('/', () => console.log('routes created'));

module.exports = router;
