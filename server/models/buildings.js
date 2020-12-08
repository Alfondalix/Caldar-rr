const mongoose = require('mongoose');

const BuildingsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  boilers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Boilers',
    },
  ],
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Buildings', BuildingsSchema);
