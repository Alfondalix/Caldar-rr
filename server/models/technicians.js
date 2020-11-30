const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechniciansSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    boilersType: [{
        type: Schema.Types.ObjectId,
        ref: 'Boilers'
    }],
    birthdate: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    monthlyCapacity: {
        type: Number,
        required: true
    }
});

const Technicians = mongoose.model('Technicians', TechniciansSchema);

module.exports = Technicians;
