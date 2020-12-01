const Building = require('../models/buildings.js');

// Get all buildings
exports.findAll = (req, res) => {
  Building.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ups! something went wrong"
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
    companyId: req.body.companyId,
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber
  });
  building
    .save(building)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ups! something went wrong while creating a new building"
      });
    });
}

// Read a single building
exports.findOne = (req, res) => {
  Building.findOne({ id: req.params._id })
    .then(data => {
      if(!data) {
        return res.status(400).send({
          message: "Ups! that building doesn't exist"
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Ups! something went wrong"
      })
    });
}

// Update building
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: "Data can't be empty"
    });
  }
  if(!req.body.address || !req.body.fullName || !req.body.phoneNumber) {
    return res.status(400).send({ message: "content can't be empty"});
  }
  Building.findOneAndUpdate({ id: req.params._id }, req.body, { new: true })
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: "Can't update the building that you requested"
        });
      }
      else res.send({ message: "Building updated successfully", data });
    })
    .catch(err => {
      message: "Ups! error while updating"
    });
}

exports.delete = (req, res) => {
  Building.findOneAndRemove({ id: req.params._id })
    .then(data =>
      res.send({ message: "Building removed successfully!" })
    )
    .catch(err => {
      res.status(500).send({ message: "Ups! error removing the requested building" });
    });
}
