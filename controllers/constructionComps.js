const { request } = require("express");

const express = require('express');
const path = require('path');
const data = require('../data/constructionComps.json')

const app = express();
const port = process.env.PORT || 5000;

app.get('/constructoras', (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log('corriendo en 5000'));

