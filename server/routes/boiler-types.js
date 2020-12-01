const boilertypes = require('../controllers/boiler-types.js');
const router = require('express').Router();

// GET ALL BOILER TYPES
router.get('/', boilertypes.findAll);

// CREATE NEW BOILER TYPE
router.post('/', boilertypes.create);

// GET ONE BOILER TYPE
router.get('/:id', boilertypes.findOne);

// UPDATE BOILER TYPE
router.put('/:id', boilertypes.update);

// DELETE BOILER TYPE
router.delete('/:id', boilertypes.delete);

module.exports = router;
