const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoilersSchema = new Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Boilers'
        },
        description: {
            type: String,
            required: true
        },
        idType: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Boilers'
        },

});

const Boilers = mongoose.model('Boilers', BoilersSchema);

module.exports = Boilers;