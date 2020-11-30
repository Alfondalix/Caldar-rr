const technicians = require('../controllers/technicians.js');

var router = require('express').Router();

// GET ALL TECHNICIAN
router.get('/All', technicians.findAll);

// CREATE NEW TECHNICIAN
router.post('/New', technicians.create);

// UPDATE TECHNICIAN
router.put('/:fullname', technicians.update);

// DELETE TECHNICIAN
router.delete('/:fullname', technicians.delete);

// GET ONE TECHNICIAN
router.get('/:fullname', technicians.findOne);

module.exports = router;