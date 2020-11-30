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

// Get one boiler type
exports.findOne = (req, res) => {
    const name = req.params.name;
    boilertypes.findOne({name})
        .then(data => {
            if(!data) {
                return res.status(400).send({
                    message: "that boiler type doesn't exist"
                });
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Something went wrong"
            })
        });
}