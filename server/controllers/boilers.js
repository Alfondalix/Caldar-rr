const Bioler = require('../models/boilers.js');

// Get all Biolers
exports.findAll = (req, res) => {
  Bioler.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ups! something went wrong"
      });
    });
}

// Create a new Bioler
exports.create = (req, res) => {
  if(!req.body.id || !req.body.description || !req.body.idType) {
    res.status(400).send({ message: "Content can't be empty "});
  }
  const bioler = new Bioler({
    id: req.body.id,
    description: req.body.description,
    idType: req.body.idType,
  });
  bioler
    .save(bioler)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while creating a new Bioler"
      });
    });
}

// Read a single Bioler
exports.findOne = (req, res) => {
  const id = req.params.id;
  Bioler.findOne({id})
    .then(data => {
      if(!data) {
        return res.status(400).send({
          message: "The Bioler doesn't exist"
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

// Update Bioler
exports.update = (req, res) => {
  if(!req.body) {
    return res.status(400).send({
      message: "Data can't be empty"
    });
  }
  if(!req.body.id || !req.body.description || !req.body.idType) {
    return res.status(400).send({ message: "content can't be empty"});
  }

  const id = req.params.id;
  Bioler.findOneAndUpdate({id})
    .then(data => {
      if(!data) {
        res.status(404).send({
          message: "Can't update the Bioler that you requested"
        });
      }
      else res.send({ message: "Bioler updated successfully" });
    })
    .catch(err => {
      message: "Ups! error while updating"
    });
}

exports.delete = (req, res) => {
  const id = req.params.id;
  Bioler.findOneAndRemove({id})
    .then(data =>
      res.send({ message: "Bioler removed successfully!" })
    )
    .catch(err => {
      res.status(500).send({ message: "Something went wrong" });
    });
}