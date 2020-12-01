const BoilerTypes = require('../models/boiler-types.js');

exports.create = (req, res) => {
  const boylerType = new BoilerTypes({
    name: req.body.name,
    description: req.body.description,
  });
  boylerType
    .save(boylerType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while creating a new boiler type!',
      });
    });
};

exports.findAll = (req, res) => {
  BoilerTypes.find({})
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.findOne = (req, res) => {
  BoilerTypes.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: "That boiler type doesn't exist",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.update = (req, res) => {
  console.log('REQ PARAMS', req.params)
  BoilerTypes.findOneAndUpdate({ id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was not found.',
        });
      } else res.send({ message: 'Update succesfully.', data });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error',
      });
    });
};

exports.delete = (req, res) => {
  BoilerTypes.findOneAndRemove({ id: req.params.id })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was not found.',
        });
      } else res.send({ message: 'Delete succesfully.' });
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error' });
    });
};
