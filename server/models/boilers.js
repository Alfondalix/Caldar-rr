const mongoose = require('mongoose');

const BoilersSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  idType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Boilers',
  },
});

module.exports = mongoose.model('Boilers', BoilersSchema);
