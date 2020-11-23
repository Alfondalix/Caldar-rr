const { request } = require("express");

const express = require('express');
const path = require('path');
const data = require('../data/constructionComps.json')

const idFilter = req => data => data.idCompany === parseInt(req.params.idCompany);
const nameFilter = req => data => data.name === req.params.name;

const app = express();
const port = process.env.PORT || 5000;

// GET ALL
app.get('/getAllCompanies', (req, res) => {
    res.send(data);
});

// GET BY ID
app.get('/getCompanyById/:idCompany', (req, res) => {
    const found = data.some(idFilter(req));

    if (found) {
        res.send(data.filter(data => data.idCompany === parseInt(req.params.idCompany)));
    } else {
        res.status(400).send({ msg: `Id not founded.` });
    }
});

// DELETE COMPANY
app.delete('/Company/delete/:idCompany', (req, res) => {
    const found = data.some(idFilter(req));

    if (found) {
        res.json({
            msg: 'Company deleted',
            data: data.filter(member => !idFilter(req)(member))
        });
    } else {
    res.status(400).json({ msg: `No Company with the id of ${req.params.idCompany}` });
    }
});

// GET BY CLASS

app.get('/getCompanyByCategory/:name', (req, res) => {
    const found = data.some(nameFilter(req));

    if (found) {
        res.send(data.filter(data => data.name === req.params.name));
    } else {
        res.status(400).send({ msg: `Name not founded.` });
    }
});

app.listen(port, () => console.log('corriendo en 5000'));

