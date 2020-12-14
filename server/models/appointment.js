const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  building: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Buildings',
    required: true,
  },
  boiler: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boilers',
    required: true,
  },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Technicians',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  monthlyHours: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
