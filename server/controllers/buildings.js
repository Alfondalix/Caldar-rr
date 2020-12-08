const Building = require('../models/buildings.js');

exports.findAll = (req, res) => {
  Building.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.create = (req, res) => {
  const addressValid = /\w\s\d/;
  if (!req.body.address || !req.body.fullName || !req.body.phoneNumber) {
    res.status(400).send({ message: 'Content Cannot Be Empty ' });
  }
  if (!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: 'Error: Invalid Adress' });
  }
  if (req.body.phoneNumber.length < 7) {
    return res.status(400).send({ meessage: 'Error: Phone Not Valid' });
  }
  if (req.body.fulllname.length < 3) {
    return res.status(400).send({ message: 'Error: Invalid Builgind Name' });
  }

  const building = new Building({
    address: req.body.address,
    boilers: req.body.boilers,
    fullName: req.body.fullName,
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
          err.message || 'Something Went Wrong While Creating A New Building',
      });
    });
};

exports.findOne = (req, res) => {
  Building.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'That Building Does not Exist',
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.update = (req, res) => {
  const addressValid = /\w\s\d/;
  if (!req.body.address && !req.body.fullName && !req.body.phoneNumber) {
    return res.status(400).send({ message: 'Content Cannot Be Empty' });
  }
  if (req.body.fulllname.length < 3) {
    return res.status(400).send({ meessage: 'Error: Name Not Valid' });
  }
  if (req.body.phoneNumber.length < 7) {
    return res.status(400).send({ meessage: 'Error: Phone Not Valid' });
  }
  if (!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: 'Error: Invalid Adress' });
  }
  Building.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update The Building That You Requested',
        });
      } else
        res
          .status(200)
          .send({ message: 'Building Updated Successfully', data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error While Updating',
      });
    });
};

exports.delete = (req, res) => {
  Building.findOneAndRemove({ _id: req.params.id })
    .then(() =>
      res.status(200).send({ message: 'Building Removed Successfully!' })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error Removing The Requested Building',
      });
    });
};
