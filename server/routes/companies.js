const companies = require('../controllers/companies.js');

var router = require('express').Router();

// GET ALL COMPANIES
router.get('/All', companies.findAll);

// CREATE NEW COMPANY
router.post('/New', companies.create);

// UPDATE COMPANY
router.put('/:cuit', companies.update);

// DELETE COMPANY
router.delete('/:cuit', companies.delete);

// GET ONE COMPANY
router.get('/:cuit', companies.findOne);

module.exports = router;
