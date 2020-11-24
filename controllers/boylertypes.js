const express = require('express')

const app = express()

const path = require('path')

const boylerTypesData = require('../data/boylertypes.json')

const fs = require('fs')

app.get('/getAllBoylerTypes',[], (request,response) =>{
    response.json(boylerTypesData)
})

app.get('/getBoylerTypesByName/:name',[], (request,response) =>{
    const name = request.params.name;
    const found = boylerTypesData.some(boylertype => boylertype.name === name);
    if(found) {
        response.json(boylerTypesData.find(boylertype => boylertype.name === name));
    } else {
        response.status(400).send({ msg: `Name not founded.` });
    }
})

app.get('/getBoylerTypesById/:id',[], (request,response) =>{
    const id = request.params.id;
    const found = boylerTypesData.some(boylertype => boylertype.idType === parseInt(id));
    if(found) {
        response.json(boylerTypesData.find(boylertype => boylertype.idType === parseInt(id)));
    } else {
        response.status(400).send({ msg: `Id not founded.` });
    }
    
})

app.delete('/deleteBoylerTypes/:id',[], (request,response) =>{
    const id = request.params.id
    const data = JSON.parse(fs.readFileSync('data/boylertypes.json'))
    fs.writeFileSync('data/boylertypes.json',JSON.stringify(data.filter(boylertype => boylertype.idType !== parseInt(id))))
    response.json(data.filter(boylertype => boylertype.idType !== parseInt(id)))
})

module.exports = app



