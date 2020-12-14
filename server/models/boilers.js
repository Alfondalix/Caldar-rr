const mongoose = require('mongoose');

const BoilersSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  idType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Boilers',
    required: true,
  },
});

module.exports = mongoose.model('Boilers', BoilersSchema);
