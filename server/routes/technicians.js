const technicians = require('../controllers/technicians.js');
const router = require('express').Router();

// GET ALL TECHNICIAN
router.get('/', technicians.findAll);

// CREATE NEW TECHNICIAN
router.post('/', technicians.create);

// UPDATE TECHNICIAN
router.put('/:id', technicians.update);

// DELETE TECHNICIAN
router.delete('/:id', technicians.delete);

// GET ONE TECHNICIAN
router.get('/:id', technicians.findOne);

module.exports = router;