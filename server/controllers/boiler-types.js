const BoilerTypes = require('../models/boiler-types.js');

exports.create = (req, res) => {
  const regex = /[A-Z]/;
  if(req.body.name.length != 1 && req.body.name.match(regex)) {
    return res.status(400).send({ message: "Error: Invalid Boiler Name" })
  }
  if(req.body.description.length <= 0) {
    return res.status(400).send({ message: "Error: Invalid Boiler description" })
  }
  
  const boylerType = new BoilerTypes({
    name: req.body.name,
    description: req.body.description,
  });
  boylerType
    .save(boylerType)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.findAll = (req, res) => {
  BoilerTypes.find({})
    .then((data) => {
      res.status(200).send(data);
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
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong',
      });
    });
};

exports.update = (req, res) => {
  const regex = /[A-Z]/;
  if(req.body.name.length != 1 && req.body.name.match(regex)) {
    return res.status(400).send({ message: "Error: Invalid Boiler Name" })
  }
  if(req.body.description.length <= 0) {
    return res.status(400).send({ message: "Error: Invalid Boiler description" })
  }
  BoilerTypes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was not found.',
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
  BoilerTypes.findOneAndRemove({ _id: req.params.id })
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
