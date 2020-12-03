const mongoose = require('mongoose');

const CompaniesSchema = new Schema({
    cuit: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    buildings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Building'
    }]
});

module.exports = mongoose.model('Companies', CompaniesSchema);
