const Boiler = require('../models/boilers.js');

exports.findAll = (req, res) => {
  Boiler.find({})
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
  if (!req.body.description && !req.body.idType) {
    res.status(400).send({ message: 'Content Cannot Be Empty ' });
  }
  const boiler = new Boiler({
    description: req.body.description,
    idType: req.body.idType,
  });
  boiler
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.findOne = (req, res) => {
  Boiler.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: 'The Boiler Does Not Exist',
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
  if (!req.body) {
    return res.status(400).send({
      message: 'Data Cannot Be Empty',
    });
  }
  if (!req.body.description || !req.body.idType) {
    return res.status(400).send({ message: 'Content Cannot Be Empty' });
  }

  Boiler.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update The Boiler That You Requested',
        });
      } else res.status(200).send({ message: 'Update Succesfully.', data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.delete = (req, res) => {
  Boiler.findOneAndRemove({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was Not Found.',
        });
      } else res.status(200).send({ message: 'Delete Succesfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};
