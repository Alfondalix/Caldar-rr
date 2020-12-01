const Technicians = require("../models/technicians.js");

exports.create = (req, res) => {
    const technician = new Technicians({
        fullname: req.body.fullname,
        boilersType: req.body.boilers,
        birthdate: req.body.birthdate,
        phoneNumber: req.body.phoneNumber,
        monthlyCapacity: req.body.monthlyCapacity
    });

    technician
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
    const fullname = req.params.fullname;

    Technicians.findOne({fullname})
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
    const fullname = req.params.fullname;
    Technicians.findOneAndRemove({fullname})
    .then(data => {
        res.send({
            message: 'Technician deleted'
        })
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error' + fullname
        });
    });
};

exports.update = (req, res) => {
    const fullname = req.params.fullname;
    Technicians.findOneAndUpdate({fullname})
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