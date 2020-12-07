const Technicians = require("../models/technicians.js");

exports.create = (req, res) => {
    const nameFor = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if (!req.body.fullName && !req.body.birthdate && !req.body.phoneNumber && !req.body.monthlyCapacity) {
        return res.status(400).send({ message: "content can't be empty" });
    }
    if (req.body.fullName.length < 6 || !req.body.fullName.match(nameFor)) {
        return res.status(400).send({ meessage: "Error: name not valid"})
    }
    if(req.body.phoneNumber.length < 7) {
        return res.status(400).send({ meessage: "Error: phone not valid"})
    }

    const technician = new Technicians({
        fullName: req.body.fullName,
        boilersType: req.body.boilers,
        birthdate: req.body.birthdate,
        phoneNumber: req.body.phoneNumber,
        monthlyCapacity: req.body.monthlyCapacity
    });

    technician
        .save(technician)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error'
            });
        });
};

exports.findAll = (req, res) => {
    Technicians
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error'
            });
        });
};

exports.findOne = (req, res) => {
    Technicians.findOne({_id: req.params.id})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: 'Technician doesnt exists.'
            });
        }
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};

exports.delete = (req, res) => {
    Technicians.findOneAndRemove({_id: req.params.id})
    .then(data => {
        res.status(200).send({
            message: 'Technician deleted', data
        })
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error' + fullName
        });
    });
};

exports.update = (req, res) => {
    const nameFor = /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/;
    if (!req.body.fullName && !req.body.birthdate && !req.body.phoneNumber && !req.body.monthlyCapacity) {
        return res.status(400).send({ message: "content can't be empty" });
    }
    if (req.body.fullName.length < 6 || !req.body.fullName.match(nameFor)) {
        return res.status(400).send({ meessage: "Error: name not valid"})
    }
    if(req.body.phoneNumber.length < 7) {
        return res.status(400).send({ meessage: "Error: phone not valid"})
    }
    Technicians.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: 'Was not found. Can not update.'
            });
        } else res.status(200).send({ message: 'Updated succesfully.', data});
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error'
        });
    });
};