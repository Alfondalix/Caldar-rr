const express = require('express')

const app = express()

const path = require('path')

const boylerTypesData = require('../data/boylertypes.json')

app.get('/getAllBoylerTypes',[], (request,response) =>{
    response.json(boylerTypesData)
})



module.exports = app



