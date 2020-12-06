const Boiler = require('../models/boilers.js');

exports.findAll = (req, res) => {
  Boiler.find({})
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
  if (!req.body.description && !req.body.idType) {
    res.status(400).send({ message: "Content can't be empty " });
  }
  const boiler = new Boiler({
    description: req.body.description,
    idType: req.body.idType,
  });
  boiler.save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.findOne = (req, res) => {
  Boiler.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: "The Boiler doesn't exist",
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
  if (!req.body) {
    return res.status(400).send({
      message: "Data can't be empty",
    });
  }
  if (!req.body.description || !req.body.idType) {
    return res.status(400).send({ message: "Content can't be empty" });
  }

  Boiler.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Can't update the Boiler that you requested",
        });
      } else res.status(200).send({ message: 'Update succesfully.', data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.delete = (req, res) => {
  Boiler.findOneAndRemove({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was not found.',
        });
      } else res.status(200).send({ message: 'Delete succesfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};
