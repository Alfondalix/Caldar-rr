const db = require("../models");
const Boiler = db.boiler;

// Create an Save a new Boiler
exports.create = (req, res) => {
    // Validate request
    if (!req.body.id || !req.body.description || req.body.idType);
    res.status(400).send({ message: "Content can not be empty!"});
    return;
}

// Create a Boiler
const boiler = new Boiler({
    id: req.body.id,
    description: req.body.description,
    idType: req.body.idType,
});

// Save Boiler in the database
boiler
    .save(boiler)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "some error ocurred while creating the Boiler"
        });
    });

// Retrieve all Boilers from the database
exports.findAll = (req, res) => {
    Boiler.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "some error ocurred while retrieving boiler"
        });
    });
};

// Find a single Boiler an id
exports.findOne = (req, res) => {
    Boiler.findOne({id: req.params.id})
    .then(data => {
        if (!data) {
            return res.status(400).send({
                message: `Boiler with id ${req.params.id} was not found`
            })
        }
        res.send(data)
    })
    .catch(err => {
        res.status (500).send({
            message:
                err.message || "Some error ocurred while retrieving boilers"
        });
    });
};

// Update a Boiler by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
     // Validate request
     if (!req.body.id || !req.body.description || req.body.idType);
     res.status(400).send({ message: "Content can not be empty!"});
     return;
 }

 const id = req.params.id;

 Boiler.findOneAndUpdate({id}, req.body, { useFindAndModify: false })
 .then(data => {
     if (!data) {
         res.status(400).send({
             message: `Cannot update Boiler with the id=${id}. Maybe Boiler was not found!`
         });
    }else res.send({ message: "Boiler was updated successfully."});
 })
 .catch(err => {
     res.status(500).send({
         message: "error updating Boiler with id=" + id
     });
 });

// Delete a Boiler wtih the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Boiler.findOneAndRemove({id}, { useFindAndModify: false })
    .then(data => {
        res.send({ message: "Boiler was remove successfully." })
    })
    .catch(err => {
        res.status(500).send({
            message: "Error removing boiler with id=" + id
        });
    });
};