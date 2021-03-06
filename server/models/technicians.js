const mongoose = require('mongoose');

const TechniciansSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  boilersType: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boilers',
      required: true,
    },
  ],
  birthdate: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  monthlyCapacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Technicians', TechniciansSchema);
