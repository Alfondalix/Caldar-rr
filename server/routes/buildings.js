const building = require('../controllers/buildings.js');

const router = require("express").Router();

// Get all the buildings
router.get('/', building.findAll);

// Create a new building
router.post('/add', building.create);

// Read a single building
router.get('/:fullName', building.findOne);

// Update building
router.put('/:fullName', building.uptdate);

// Delete a building
router.delete('/:fullName', building.delete);

module.exports = router;