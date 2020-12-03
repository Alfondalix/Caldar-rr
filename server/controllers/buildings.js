const Building = require('../models/buildings.js');

// Get all buildings
exports.findAll = (req, res) => {
  Building.find({})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Something went wrong"
      });
    });
}

// Create a new building
exports.create = (req, res) => {
  if(!req.body.address || !req.body.fullName || !req.body.phoneNumber) {
    res.status(400).send({ message: "Content can't be empty "});
  }
  const building = new Building({
    address: req.body.address,
    boilers: req.body.boilers,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber
  });
  building
    .save(building)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while creating a new building"
      });
    });
}

// Read a single building
exports.findOne = (req, res) => {
  Building.findOne({ _id: req.params.id })
    .then(data => {
      if(!data) {
        return res.status(404).send({
          message: "That building doesn't exist"
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Something went wrong"
      });
    });
}

// Update building
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(204).send({
      message: "Data can't be empty"
    });
  }
  if(!req.body.address || !req.body.fullName || !req.body.phoneNumber) {
    return res.status(400).send({ message: "content can't be empty"});
  }
  Building.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: "Can't update the building that you requested"
        });
      }
      else res.status(200).send({ message: "Building updated successfully", data });
    })
    .catch(err => {
      res.status(500).send({
        message: 
        err.message || "Error while updating"
      });
    });
}

exports.delete = (req, res) => {
  Building.findOneAndRemove({ _id: req.params.id })
    .then(data =>
      res.status(200).send({ message: "Building removed successfully!" })
    )
    .catch(err => {
      res.status(500).send({ message: "Error removing the requested building" });
    });
}
