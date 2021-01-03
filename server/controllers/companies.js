const Companies = require('../models/companies.js');

exports.create = (req, res) => {
  if (!req.body.cuit || !req.body.email || !req.body.adress) {
    res.status(400).send({ message: 'Content Cannot Be Empty ' });
  }
  const cuitValid = /^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g;
  const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const addressValid = /\w\s\d/;
  if (!req.body) {
    return res.status(400).send({
      message: 'Data Cannot Be Empty',
    });
  }
  if (!req.body.cuit.match(cuitValid)) {
    res.status(400).send({ message: 'Error: Invalid cuit' });
  }
  if (!req.body.email.match(emailValid)) {
    return res.status(400).send({ message: 'Error: Invalid Email' });
  }
  if (!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: 'Error: Invalid Adress' });
  }
  const company = new Companies({
    cuit: req.body.cuit,
    email: req.body.email,
    adress: req.body.adress,
    buildings: req.body.buildings,
  });

  company
    .save(company)
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

exports.findAll = (req, res) => {
  Companies.find({})
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
  Companies.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: 'Company Does Not Exists.',
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

exports.delete = (req, res) => {
  Companies.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.status(200).send({
        message: 'Company Removed Successfully!',
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error Removing The Requested Building',
      });
    });
};

exports.update = (req, res) => {
  const cuitValid = /^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g;
  const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const addressValid = /\w\s\d/;
  console.log(req.body)
  if (!req.body || req.body === {}) {
    return res.status(400).send({
      message: 'Data Cannot Be Empty',
    });
  }
  if (!req.body.cuit.match(cuitValid)) {
    res.status(400).send({ message: 'Error: Invalid Cuit' });
  }
  if (!req.body.email.match(emailValid)) {
    return res.status(400).send({ message: 'Error: Invalid Email' });
  }
  if (!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: 'Error: Invalid Adress' });
  }
  Companies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Cannot Update The Company That You Requested',
        });
      } else res.status(200).send({ message: 'Company Updated Succesfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error While Updating',
      });
    });
};
