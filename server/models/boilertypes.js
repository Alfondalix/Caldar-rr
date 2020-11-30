const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoilerTypesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: false
        },
    },
);

const boilertypes = mongoose.model('Boiler-Types', BoilerTypesSchema);

module.exports = boilertypes;