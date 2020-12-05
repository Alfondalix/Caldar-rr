const Companies = require("../models/companies.js");

exports.create = (req, res) => {
  if (!req.body.cuit || !req.body.email || !req.body.adress) {
    res.status(400).send({ message: "Content can't be empty " });
  }
  const cuitValid = /^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g;
  const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const addressValid = /\w\s\d/;
  if (!req.body) {
       return res.status(400).send({
           message: "Data can't be empty",
       }); 
   }
  if(!req.body.cuit.match(cuitValid)) {
    res.status(400).send({ message: "Error: Invalid cuit" })
  }
  if(!req.body.email.match(emailValid)) {
    return res.status(400).send({ message: "Error: Invalid Email"})
  }
  if(!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: "Error: Invalid Adress"})
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Something went wrong while creating a new building",
      });
    });
};

exports.findAll = (req, res) => {
  Companies.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something went wrong",
      });
    });
};

exports.findOne = (req, res) => {
  Companies.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Company (" + _id + ") doesn't exists.",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Something went wrong",
      });
    });
};

exports.delete = (req, res) => {
  Companies.findOneAndRemove({ _id: req.params.id })
    .then((data) => {
      res.send({
        message: "Company removed successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error removing the requested building",
      });
    });
};

exports.update = (req, res) => {
  const cuitValid = /^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g;
  const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const addressValid = /\w\s\d/;
  if (!req.body) {
       return res.status(400).send({
           message: "Data can't be empty",
       }); 
   }
  if(!req.body.cuit.match(cuitValid)) {
    res.status(400).send({ message: "Error: Invalid cuit" })
  }
  if(!req.body.email.match(emailValid)) {
    return res.status(400).send({ message: "Error: Invalid Email"})
  }
  if(!req.body.adress.match(addressValid) || req.body.adress.length < 3) {
    return res.status(400).send({ message: "Error: Invalid Adress"})
  }
   Companies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
   .then(data => {
     if (!data) {
      res.status(404).send({
        message: "Can't update the Company that you requested",
      });
    } else res.send({ message: "Company updated succesfully." });
   })
   .catch((err) => {
    res.status(500).send({
      message: err.message || "Error while updating",
    });
   });
};
