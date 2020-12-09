const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  building: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Buildings'
  },
  boiler: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Boilers'
  },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Technicians'
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  monthlyHours: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);