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
                    message: "That boiler type doesn't exist"
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

// Update boiler type
exports.update = (req, res) => {
    const name = req.params.name;
    boilertypes.findOneAndUpdate({name}, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: 'Was not found.'
            });
        } else res.send({ message: 'Update succesfully.'});
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};

// Delete boiler type
exports.delete = (req, res) => {
    const name = req.params.name;
    boilertypes.findOneAndRemove({name})
        .then(data => {if (!data) {
            res.status(404).send({
                message: 'Was not found.'
            });
        } else res.send({ message: 'Delete succesfully.'});
        })
        .catch(err => {
            res.status(500).send({ message: "Error" });
        });
}