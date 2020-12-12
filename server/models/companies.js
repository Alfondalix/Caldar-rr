const mongoose = require('mongoose');

const CompaniesSchema = new mongoose.Schema({
  cuit: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  buildings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Building',
      required: true,
    },
  ],
});

module.exports = mongoose.model('Companies', CompaniesSchema);
