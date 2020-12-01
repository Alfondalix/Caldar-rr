const Companies = require("../models/companies.js");

exports.create = (req, res) => {
    const company = new Companies({
        cuit: req.body.cuit,
        email: req.body.email,
        adress: req.body.adress,
        buildings: req.body.buildings
    });

    company
        .save(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error'
            });
        });
};

exports.findAll = (req, res) => {
    Companies.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};

exports.findOne = (req, res) => {
    const cuit = req.params.cuit;
    Companies.findOne({cuit})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: 'Company doesnt exists.'
            });
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};

exports.delete = (req, res) => {
    const cuit = req.params.cuit;
    Companies.findOneAndRemove({cuit})
    .then(data => {
        res.send({
            message: 'Company deleted'
        })
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error' + cuit
        });
    });
};

exports.update = (req, res) => {
    const cuit = req.params.cuit;
    Companies.findOneAndUpdate({cuit})
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: 'Was not found. Can not update.'
            });
        } else res.send({ message: 'Updated succesfully.'});
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};
