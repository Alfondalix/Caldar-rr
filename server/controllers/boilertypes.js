const boilertypes = require('../models/boilertypes.js');


// Create a new boiler type
exports.create = (req, res) => {
    const bt = new boilertypes({
        name: req.body.name,
        description: req.body.description
    });
    bt
        .save(bt)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Something went wrong while creating a new boiler type!"
            });
        });
}

// Get all boiler types
exports.findAll = (req, res) => {
    boilertypes.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong"
            });
        });
}