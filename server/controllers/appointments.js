const Appointments = require('../models/appointment.js');
const Buildings = require('../models/buildings.js');
const Boilers = require('../models/boilers.js');
const Technicians = require('../models/technicians.js');

exports.create = (req, res) => {
  const appointment = new Appointments({
    building: req.body.building,
    boiler: req.body.boiler,
    technician: req.body.technician,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    monthlyHours: req.body.monthlyHours,
  });

  appointment
    .save(appointment)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.findAll = (req, res) => {
  Appointments.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something Went Wrong',
      });
    });
};

exports.findOne = (req, res) => {
  Appointments.findOne({ _id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          message: "That Appointment Type Does not Exist",
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
  Appointments.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: 'Was not found.',
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
  Appointments.findOneAndRemove({ _id: req.params.id })
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