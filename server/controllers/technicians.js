const Technicians = require("../models/technicians.js");

exports.create = (req, res) => {
    const technician = new Technicians({
        fullname: req.body.fullname,
        boilersType: req.body.boilers,
        birthdate: req.body.birthdate,
        phoneNumber: req.body.phoneNumber,
        monthlyCapacity: req.body.monthlyCapacity
    });

    Technicians
        .save(technician)
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
    Technicians.find({})
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
    Technicians.findOne({ciut: req.params.fullname})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: 'Technician doesnt exists.'
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
    const cuit = req.params.fullname;
    Technicians.findOneAndRemove({cuit}, {useFindAndModify: false})
    .then(data => {
        res.send({
            message: 'Technician deleted'
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
    Technicians.findOneAndUpdate({cuit}, {useFindAndModify: false})
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