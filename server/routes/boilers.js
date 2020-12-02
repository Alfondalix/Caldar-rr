const boiler = require('../controllers/boilers.js');
const router = require('express').Router();

// GET ALL BOILER
router.get('/', boiler.findAll);

// CREATE NEW BOILER
router.post('/', boiler.create);

// GET ONE BOILER
router.get('/:id', boiler.findOne);

// UPDATE BOILER
router.put('/:id', boiler.update);

// DELETE BOILER
router.delete('/:id', boiler.delete);

module.exports = router;
