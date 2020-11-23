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

app.get('/getBoylerTypesById/:id',[], (request,response) =>{
    const id = request.params.id;
    response.json(boylerTypesData.filter(boylertype => boylertype.idType == id));
})

module.exports = app



