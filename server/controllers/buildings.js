const Building = require('../models/buildings.js');

exports.findAll = (req, res) => {
  Building.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.create = (req, res) => {
  const addressValid = /\w\s\d/;
  if (!req.body.address || !req.body.fullname || !req.body.phoneNumber) {
    res.status(400).send({ message: "Content can't be empty " });
  }
  if(!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: "Error: Invalid Adress"})
  }
  if(req.body.phoneNumber.length < 7) {
    return res.status(400).send({ meessage: "Error: phone not valid"})
  }
  if(req.body.fulllname.length < 3) {
    return res.status(400).send({ message: "Error: Invalid Builgind Name"})
  }

  const building = new Building({
    address: req.body.address,
    boilers: req.body.boilers,
    fullname: req.body.fullname,
    phoneNumber: req.body.phoneNumber,
  });
  building
    .save(building)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while creating a new building',
      });
    });
};

exports.findOne = (req, res) => {
  Building.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "That building doesn't exist",
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.update = (req, res) => {
  const addressValid = /\w\s\d/;
  if (!req.body.address && !req.body.fullname && !req.body.phoneNumber) {
    return res.status(400).send({ message: "content can't be empty" });
  }
  if (req.body.fulllname.length < 3) {
    return res.status(400).send({ meessage: "Error: name not valid"})
  }
  if(req.body.phoneNumber.length < 7) {
    return res.status(400).send({ meessage: "Error: phone not valid"})
  }
  if(!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: "Error: Invalid Adress"})
  }
  Building.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Can't update the building that you requested",
        });
      } else
        res
          .status(200)
          .send({ message: 'Building updated successfully', data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error while updating',
      });
    });
};

exports.delete = (req, res) => {
  Building.findOneAndRemove({ _id: req.params.id })
    .then((data) =>
      res.status(200).send({ message: 'Building removed successfully!' })
    )
    .catch((err) => {
      res
        .status(500)
        .send({ message: 'Error removing the requested building' });
    });
};
