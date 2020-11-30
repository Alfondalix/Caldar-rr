const boilertypes = require('../controllers/boilertypes.js');

const router = require('express').Router();

// Get all boiler types
router.get('/', boilertypes.findAll);

// Create a new boiler types
router.post('/add', boilertypes.create);

/*// Read a single boiler types
router.get('/:name', boilertypes.findOne);

// Update boiler types
router.put('/:name', boilertypes.update);

// Delete a boiler types
router.delete('/:name', boilertypes.delete);*/

module.exports = router; 