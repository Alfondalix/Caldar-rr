const companies = require('../controllers/companies.js');

var router = require('express').Router();

// GET ALL COMPANIES
router.get('/', companies.findAll);

// CREATE NEW COMPANY
router.post('/', companies.create);

// UPDATE COMPANY
router.put('/:id', companies.update);

// DELETE COMPANY
router.delete('/:id', companies.delete);

// GET ONE COMPANY
router.get('/:id', companies.findOne);

module.exports = router;
