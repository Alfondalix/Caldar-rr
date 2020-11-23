const { request } = require("express");

const express = require('express');
const path = require('path');
const data = require('../data/constructionComps.json')

const app = express();
const port = process.env.PORT || 5000;

app.get('/constructoras', (req, res) => {
    res.send(data);
});
app.get('/constructoras/:idCompany', (req, res) => {
    const found = data.some(data => data.idCompany === parseInt(req.params.idCompany));

    if (found) {
        res.send(data.filter(data => data.idCompany === parseInt(req.params.idCompany)));
    } else {
        res.status(400).send({ msg: `Id not founded.` });
    }
});
app.listen(port, () => console.log('corriendo en 5000'));

