const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: Schema.Types.ObjectId,
        ref: 'Building'
    }]
});

const Companies = mongoose.model('Companies', CompaniesSchema);

module.exports = Companies;
