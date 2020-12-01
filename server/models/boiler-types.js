const mongoose = require('mongoose');

const BoilerTypesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('BoilerTypes', BoilerTypesSchema);
