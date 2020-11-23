const express = require('express')

const app = express()

const path = require('path')

const boylerTypesData = require('../data/boylertypes.json')

app.get('/getAllBoylerTypes',[], (request,response) =>{
    response.json(boylerTypesData)
})

app.get('/getBoylerTypesByName/:name',[], (request,response) =>{
    const name = request.params.name;
    response.json(boylerTypesData.filter(boylertype => boylertype.name === name));
})

module.exports = app



