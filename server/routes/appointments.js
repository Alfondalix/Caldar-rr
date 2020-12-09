const Appointments = require('../controllers/appointments.js');
const router = require('express').Router();

// GET ALL APPOINTMENTS
router.get('/', Appointments.findAll);

// CREATE NEW APPOINTMENT
router.post('/', Appointments.create);

// GET ONE APPOINTMENT
router.get('/:id', Appointments.findOne);

// UPDATE APPOINTMENT
router.put('/:id', Appointments.update);

// DELETE APPOINTMENT
router.delete('/:id', Appointments.delete);

module.exports = router;
