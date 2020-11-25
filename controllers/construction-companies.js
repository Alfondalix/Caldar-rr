const express = require('express');
const data = require('../data/construction-companies.json')
const fs = require('fs');

const router = express.Router();

const idFilter = req => data => data.idCompany === parseInt(req.params.idCompany);
const nameFilter = req => data => data.name === req.params.name;

const app = express();
const port = process.env.PORT || 5000;

// GET ALL
router.get('/getAllCompanies', (req, res) => {
    res.send(data);
});

// GET BY ID
router.get('/getCompanyById/:idCompany', (req, res) => {
    const found = data.some(idFilter(req));

    if (found) {
        res.send(data.filter(data => data.idCompany === parseInt(req.params.idCompany)));
    } else {
        res.status(400).send({ msg: `Id not founded.` });
    }
});

// DELETE COMPANY
router.delete('/deleteCompanyById/:idCompany', (req, res) => {
    const found = data.some(idFilter(req));
    
    if (found) {
        fs.writeFileSync('data/construction-companies.json', JSON.stringify(data.filter(company=> company.idCompany !== parseInt(req.params.idCompany))));
        res.json(data.filter(company => company.idCompany !== parseInt(req.params.idCompany))); 
    } else {
    res.status(400).json({ msg: `No Company with the id of ${req.params.idCompany}` });
    }
});

// GET BY CLASS
router.get('/getCompanyByCategory/:name', (req, res) => {
    const found = data.some(nameFilter(req));

    if (found) {
        res.send(data.filter(data => data.name === req.params.name));
    } else {
        res.status(400).send({ msg: `Name not founded.` });
    }
});

module.exports = router;
